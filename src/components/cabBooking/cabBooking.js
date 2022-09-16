import Header from '../Home/header';
import AvailableCabs from './availableCabs';
import Map from './map';
import SideForm from './sideForm';

import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
//Map imports
import {
  useJsApiLoader
} from '@react-google-maps/api';

// Map Constants
const CENTER = { lat: 19.075983, lng: 72.877655 };
const LIBRARIES = ['places'];

const CabBooking = () => {
  const [pickupRequiredValidationFlag, setPickupRequiredValidationFlag] =
    useState(false);
  const [dropRequiredValidationFlag, setdropRequiredValidationFlag] =
    useState(false);
  // Map state
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const pickupRef = useRef();
  const dropRef = useRef();

  const location = useLocation();
  let navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDJlbhYyDTemG0tYpyObolvcmjdkrmt3w4',
    libraries: [...LIBRARIES],
  });

  const calculateRoute = async () => {
    if (pickupRef.current.value.trim() === '' && dropRef.current.value.trim() === '') {
    //   setPickupRequiredValidationFlag(true);
    //   setdropRequiredValidationFlag(true);
      return;
    }

    if (pickupRef.current.value.trim() === '') {
    //   setPickupRequiredValidationFlag(true);
      return;
    }

    if (dropRef.current.value.trim() === '') {
    //   setdropRequiredValidationFlag(true);
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
    console.log(results.routes[0].legs[0].distance.text); // set this value in state
    console.log(results.routes[0].legs[0].duration.text); // set this value in state
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    pickupRef.origin.value = '';
    dropRef.origin.value = '';
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

      {/* <Header />
            <SideForm />
            <Map />
            <AvailableCabs /> */}
      {/* {isLoaded && <Map center={CENTER} setMap={setMap} directionsResponse={directionsResponse} />} */}
      {isLoaded && <div>Maps Page</div>}
    </>
  );
};

export default CabBooking;
