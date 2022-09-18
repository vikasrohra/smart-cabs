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
  const [recommendedSelectedCab, setRecommendedSelectedCab] = useState(0);
  const [cabsData, setCabsData] = useState(null);
  // Map state
  const [center, setCenter] = useState({ lat: 19.075983, lng: 72.877655 });
  const [currentLocation, setCurrentLocation] = useState('');
  const [isGetCurrentLocationIconClicked, setIsGetCurrentLocationIconClicked] =
    useState(false);
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    getCurrentLocation();
    initializeCabsFare();
  }, []);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const pickupRef = useRef();
  const dropRef = useRef();

  const location = useLocation();
  let navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: [...LIBRARIES],
  });

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter(() => {
        return {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    });
  };

  function getReverseGeocodingData(currLatLng) {
    // eslint-disable-next-line no-undef
    var latlng = new google.maps.LatLng(currLatLng.lat, currLatLng.lng);
    // This is making the Geocode request
    // eslint-disable-next-line no-undef
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      // eslint-disable-next-line no-undef
      if (status !== google.maps.GeocoderStatus.OK) {
        alert(status);
      }
      // This is checking to see if the Geoeode Status is OK before proceeding
      // eslint-disable-next-line no-undef
      if (status == google.maps.GeocoderStatus.OK) {
        // console.log(results);
        var address = results[0].formatted_address;
        setCurrentLocation(address);
      }
    });

    setIsGetCurrentLocationIconClicked(true);
  }

  const initializeCabsFare = () => {
    const cabs = [
      {
        id: 0,
        name: 'Any',
        away: '2 mins away',
        fare: 0,
      },
      {
        id: 1,
        name: 'Auto',
        away: '3 mins away',
        fare: 0,
      },
      {
        id: 2,
        name: 'Mini',
        away: '3 mins away',
        fare: 0,
      },
      {
        id: 3,
        name: 'Prime Play',
        away: '5 mins away',
        fare: 0,
      },
      {
        id: 4,
        name: 'Prime Sedan',
        away: '6 mins away',
        fare: 0,
      },
      {
        id: 5,
        name: 'Prime SUV',
        away: '8 mins away',
        fare: 0,
      },
      {
        id: 6,
        name: 'Prime EXEC',
        away: '15 mins away',
        fare: 0,
      },
    ];
    setCabsData(cabs);
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
    
    const cabsInfo = [...cabsData];
    const cabsWithFare = cabsInfo.map((cab, index) => {
      return {
        id: cab.id,
        name: cab.name,
        fare: calculateCabFare(cab.id, results.routes[0].legs[0].distance.text, results.routes[0].legs[0].duration.text),
      }
    });
    
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setShowRecommendedCabs(true);
    setCabsData(cabsWithFare);
  };

  const calculateCabFare = (cabType, distance, duration) => {
    const serviceTax = 5.6; // In Percentage, charged at the total fare
    const baseKilometers = 20; // In Kiloneters, after 20 kilometers charge/kilometer will be increased
    const basePriceKilometers = 5; // In Kilometers, after 5 Kms base price will not be charged
    const rideTimeCharge = 1; // In rupees, for every minute you will be charged a rupee

    distance = distance && parseInt(distance);
    duration = duration && parseInt(duration);
    switch (cabType) {
      case 0: //Any
        const chargePerKmMini0 = 6;
        const changedChargePerKmMini0 = 12; // Charge after baseKilometers
        const basePriceMini0 = 45;

        const chargePerKmPrimeExec0 = 21;
        const changedChargePerKmPrimeExec0 = 40; // Charge after baseKilometers
        const basePricePrimeExec0 = 100;

        const totalFareMini0 = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmMini0,
          changedChargePerKmMini0,
          duration,
          rideTimeCharge,
          basePriceMini0,
          basePriceKilometers,
          serviceTax
        );

        const totalFarePrimeExec0 = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmPrimeExec0,
          changedChargePerKmPrimeExec0,
          duration,
          rideTimeCharge,
          basePricePrimeExec0,
          basePriceKilometers,
          serviceTax
        );

        return (`₹${Math.floor(totalFareMini0).toLocaleString('en-US')} - ₹${Math.round(totalFarePrimeExec0).toLocaleString('en-US')}`);

      case 1: //Auto
        const chargePerKmAuto = 6;
        const changedChargePerKmAuto = 12; // Charge after baseKilometers
        const basePriceAuto = 45;

        const totalFareAuto = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmAuto,
          changedChargePerKmAuto,
          duration,
          rideTimeCharge,
          basePriceAuto,
          basePriceKilometers,
          serviceTax
        );

        return `₹${Math.floor(totalFareAuto).toLocaleString('en-US')}`;

      case 2: //Mini
        const chargePerKmMini = 11;
        const changedChargePerKMini = 20; // Charge after baseKilometers
        const basePriceMini = 50;

        const totalFareMini = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmMini,
          changedChargePerKMini,
          duration,
          rideTimeCharge,
          basePriceMini,
          basePriceKilometers,
          serviceTax
        );

        return `₹${Math.floor(totalFareMini).toLocaleString('en-US')}`;

      case 3: //Prime Play
        const chargePerKmPP = 13;
        const changedChargePerKmPP = 25; // Charge after baseKilometers
        const basePricePP = 60;

        const totalFarePrimePlay = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmPP,
          changedChargePerKmPP,
          duration,
          rideTimeCharge,
          basePricePP,
          basePriceKilometers,
          serviceTax
        );

        return `₹${Math.floor(totalFarePrimePlay).toLocaleString('en-US')}`;

      case 4: //Prime Sedan
        const chargePerKmPS = 15;
        const changedChargePerKmPS = 30; // Charge after baseKilometers
        const basePricePS = 70;

        const totalFarePrimeSedan = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmPS,
          changedChargePerKmPS,
          duration,
          rideTimeCharge,
          basePricePS,
          basePriceKilometers,
          serviceTax
        );

        return `₹${Math.floor(totalFarePrimeSedan).toLocaleString('en-US')}`;

      case 5: //Prime SUV
        const chargePerKmPSuv = 18;
        const changedChargePerKmPSuv = 35; // Charge after baseKilometers
        const basePricePSuv = 80;

        const totalFarePrimeSuv = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmPSuv,
          changedChargePerKmPSuv,
          duration,
          rideTimeCharge,
          basePricePSuv,
          basePriceKilometers,
          serviceTax
        );

        return `₹${Math.floor(totalFarePrimeSuv).toLocaleString('en-US')}`;

      case 6: //Prime EXEC
        const chargePerKmExec = 21;
        const changedChargePerKmExec = 40; // Charge after baseKilometers
        const basePriceExec = 100;

        const totalFarePrimeExec = calculateDifferentCharges(
          distance,
          baseKilometers,
          chargePerKmExec,
          changedChargePerKmExec,
          duration,
          rideTimeCharge,
          basePriceExec,
          basePriceKilometers,
          serviceTax
        );

        return `₹${Math.floor(totalFarePrimeExec).toLocaleString('en-US')}`;
    }
  };

  const calculateDifferentCharges = (
    distance,
    baseKilometers,
    chargePerKm,
    changedChargePerKm,
    duration,
    rideTimeCharge,
    basePrice,
    basePriceKilometers,
    serviceTax
  ) => {
    // Charge on distance
    let chargeOnDistance = 0;
    if (distance > baseKilometers) {
      chargeOnDistance = baseKilometers * chargePerKm;
      chargeOnDistance += (distance - baseKilometers) * changedChargePerKm;
    } else {
      chargeOnDistance = distance * chargePerKm;
    }

    // Charge on time
    let chargeOnTime = duration * rideTimeCharge;

    // Base price charge
    let basePriceCharge = basePrice * basePriceKilometers;

    let totalFare = chargeOnDistance + chargeOnTime + basePriceCharge;
    totalFare +=
      (chargeOnDistance + chargeOnTime + basePriceCharge) * (serviceTax / 100);

      return totalFare;
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
    setCurrentLocation('');
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

  const handlePickUpChange = () => {
    if (pickupRef.current.value.trim() === '') {
      setCurrentLocation(null);
    }
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
            currentLocation={currentLocation}
            getReverseGeocodingData={getReverseGeocodingData}
            center={center}
            isGetCurrentLocationIconClicked={isGetCurrentLocationIconClicked}
            handlePickUpChange={handlePickUpChange}
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
              cabsData={cabsData}
            />
          )}
          <div
            className='fixed right-3 bottom-52 bg-white p-1 cursor-pointer lg:z-35'
            onClick={() => map.panTo(center)}
          >
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
