import Header from '../Home/header';
import RecommendedCabs from './recommendedCabs';
import Map from './map';
import SideForm from './sideForm';

import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
//Map imports
import { useJsApiLoader } from '@react-google-maps/api';

// Map Constants
const LIBRARIES = ['places'];

const CabBooking = () => {
  const [pickupRequiredValidationFlag, setPickupRequiredValidationFlag] =
    useState(false);
  const [dropRequiredValidationFlag, setdropRequiredValidationFlag] =
    useState(false);
  const [translateRecommendedCabs, setTranslateRecommendedCabs] =
    useState(false);
  const [showRecommendedCabs, setShowRecommendedCabs] = useState(false);
  const [recommendedSelectedCab, setRecommendedSelectedCab] = useState(1);
  // Map state
  const [center, setCenter] = useState({ lat: 19.075983, lng: 72.877655 });
  const [currentLocation, setCurrentLocation] = useState(null);
  const [isGetCurrentLocationIconClicked, setIsGetCurrentLocationIconClicked] = useState(false);
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    getCurrentLocation();
  }, []);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const pickupRef = useRef();
  const dropRef = useRef();

  const location = useLocation();
  let navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDJlbhYyDTemG0tYpyObolvcmjdkrmt3w4',
    libraries: [...LIBRARIES],
  });

  const getCurrentLocation = (isRequiredAsPickup) => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentLocation(position);
      setCenter(() => {
        return {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    });

    if(isRequiredAsPickup){
      setIsGetCurrentLocationIconClicked(true);
    }    
  };

  const calculateRoute = async () => {
    if (
      pickupRef.current.value.trim() === '' &&
      dropRef.current.value.trim() === ''
    ) {
      setPickupRequiredValidationFlag(true);
      setdropRequiredValidationFlag(true);
      return;
    }

    if (pickupRef.current.value.trim() === '') {
      setPickupRequiredValidationFlag(true);
      return;
    }

    if (dropRef.current.value.trim() === '') {
      setdropRequiredValidationFlag(true);
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: pickupRef.current.value,
      destination: dropRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setShowRecommendedCabs(true);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    pickupRef.current.value = '';
    dropRef.current.value = '';
    setPickupRequiredValidationFlag(false);
    setdropRequiredValidationFlag(false);
    setShowRecommendedCabs(false);
  };

  const toggleRecommendedCabsVisibility = () => {
    setTranslateRecommendedCabs(!translateRecommendedCabs);
  };

  const handleRecommendedCabChange = (id) => {
    setRecommendedSelectedCab(id);
  };

  const handleGoBackHomeClick = () => {
    navigate('/');
  };

  return (
    <>
      {/* Skeleton until map is loaded */}
      {!isLoaded && (
        <div className='shadow rounded-md p-4 h-[100vh]'>
          <div className='animate-pulse flex space-x-4'>
            <div className='flex-1 space-y-6 py-1'>
              <div className='h-2 bg-slate-700 rounded'></div>
              <div className='space-y-3'>
                <div className='grid grid-cols-3 gap-4'>
                  <div className='h-2 bg-slate-700 rounded col-span-2'></div>
                  <div className='h-2 bg-slate-700 rounded col-span-1'></div>
                </div>
                <div className='h-2 bg-slate-700 rounded'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoaded && (
        <>
          <SideForm
            calculateRoute={calculateRoute}
            pickupRequiredValidationFlag={pickupRequiredValidationFlag}
            dropRequiredValidationFlag={dropRequiredValidationFlag}
            pickupRef={pickupRef}
            dropRef={dropRef}
            handleGoBackHomeClick={handleGoBackHomeClick}
            clearRoute={clearRoute}
            getCurrentLocation={getCurrentLocation}
            currentLocation={currentLocation}
          />
          <Map
            center={center}
            setMap={setMap}
            directionsResponse={directionsResponse}
          />
          {showRecommendedCabs && (
            <RecommendedCabs
              translateRecommendedCabs={translateRecommendedCabs}
              toggleRecommendedCabsVisibility={toggleRecommendedCabsVisibility}
              recommendedSelectedCab={recommendedSelectedCab}
              handleRecommendedCabChange={handleRecommendedCabChange}
              distance={distance}
              duration={duration}
              isGetCurrentLocationIconClicked={isGetCurrentLocationIconClicked}
            />
          )}
          <div className='fixed right-3 bottom-52 bg-white p-1 cursor-pointer lg:z-35' onClick={() => map.panTo(center)}>
            <img
              className='w-8 h-8'
              src={`${require('../../assets/images/recenter_location.webp')}`}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CabBooking;
