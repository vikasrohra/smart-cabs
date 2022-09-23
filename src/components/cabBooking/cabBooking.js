import Header from '../Home/header';
import RecommendedCabs from './recommendedCabs';
import Map from './map';
import SideForm from './sideForm';

import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
//Map imports
import { useJsApiLoader } from '@react-google-maps/api';
import getCabName from '../utility/getCabName';

// Map Constants
const LIBRARIES = ['places'];

const CabBooking = () => {
  const [pickupRequiredValidationFlag, setPickupRequiredValidationFlag] =
    useState(false);
  const [dropRequiredValidationFlag, setdropRequiredValidationFlag] =
    useState(false);
  const [translateRecommendedCabs, setTranslateRecommendedCabs] =
    useState(false);
  const [translatePickupDropForm, setTranslatePickupDropForm] = useState(false);
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
        name: 'Mini',
        away: '3 mins away',
        fare: 0,
      },
      {
        id: 2,
        name: 'Smart Play',
        away: '5 mins away',
        fare: 0,
      },
      {
        id: 3,
        name: 'Smart Sedan',
        away: '6 mins away',
        fare: 0,
      },
      {
        id: 4,
        name: 'Smart SUV',
        away: '8 mins away',
        fare: 0,
      },
      {
        id: 5,
        name: 'Smart EXEC',
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
        away: cab.away,
        fare: calculateCabFare(
          cab.id,
          results.routes[0].legs[0].distance.text,
          results.routes[0].legs[0].duration.text
        ),
      };
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setShowRecommendedCabs(true);
    setCabsData(cabsWithFare);
    togglePickupDropFormVisibility();
  };

  const calculateCabFare = (cabType, distance, duration) => {
    const serviceTax = 5.6; // In Percentage, charged at the total fare
    const baseKilometers = 20; // In Kiloneters, after 20 kilometers charge/kilometer will be increased
    const basePriceKilometers = 5; // In Kilometers, after 5 Kms base price will not be charged
    const rideTimeCharge = 1; // In rupees, for every minute you will be charged a rupee
    distance = distance && parseFloat(distance.replace(/,/g, '').split(' ')[0]);
    if (duration && duration.includes('h')) {
      // if duration is more then or equal to 1 hr
      duration =
        parseInt(duration.split(' ')[0]) * 60 +
        parseInt(duration.split(' ')[2]);
    } else {
      duration = parseInt(duration.split(' ')[0]);
    }

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

        return `₹${Math.floor(totalFareMini0).toLocaleString(
          'en-US'
        )} - ₹${Math.round(totalFarePrimeExec0).toLocaleString('en-US')}`;

      case 1: //Mini
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

      case 2: //Smart Play
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

      case 3: //Smart Sedan
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

      case 4: //Smart SUV
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

      case 5: //Smart EXEC
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

  const togglePickupDropFormVisibility = () => {
    setTranslatePickupDropForm(!translatePickupDropForm);
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

  const redirectToConfirmationPage = (cabTypeId) => {
    const currentSelectedCab = cabsData.filter(
      (cabData) => cabData.id === cabTypeId
    );
    navigate('/booking-confirmation', {
      state: {
        selectedCab: {
          cabType: getCabName(cabTypeId),
          fare: currentSelectedCab[0].fare,
          away: currentSelectedCab[0].away,
          distance: distance,
          duration: duration,
        },
      },
    });
  };

  return (
    <>
      {/* Loader until map is loaded */}
      {!isLoaded && (
        <div className='h-[100vh] w-full flex justify-center items-center'>
          <img className='w-20 h-14' src={`${require('../../assets/images/loader.gif')}`} alt="loader" />
        </div>
      )}

      {isLoaded && (
        <>
          {/* Pickup and drop form toggler */}
          <div
            className={`label-text-alt tooltip tooltip-right tooltip-info text-xs absolute top-4 left-4 z-30`}
            data-tip='Expand'
          >
            <button
              className='btn btn-sm btn-square'
              onClick={togglePickupDropFormVisibility}
            >
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
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
            translatePickupDropForm={translatePickupDropForm}
            togglePickupDropFormVisibility={togglePickupDropFormVisibility}
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
              redirectToConfirmationPage={redirectToConfirmationPage}
            />
          )}
          {/* Re-center current location */}
          <div
            className={`label-text-alt tooltip tooltip-left tooltip-info text-xs absolute ${translateRecommendedCabs ? 'bottom-4' : 'bottom-20 md:bottom-4 lg:bottom-20 xl:bottom-4'} right-4 z-30`}
            data-tip='Recenter'
          >
            <button
              className='btn btn-sm btn-square'
              onClick={() => map.panTo(center)}
            >
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CabBooking;
