import { useRef, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
//useJsApiLoader, A hook to tell weather maps script is loaded on the browser or not
//Where we have to show the Google Map
import './App.css';
import Temp from './components/temp';

const CENTER = { lat: 48.8584, lng: 2.2945 };
const LIBRARIES = ['places'];

function App() {
  const [translateSearchCabsArrow, setTranslateSearchCabsArrow] = useState(false);
  const [map, setMap] = useState(/** @type google.maps.Map */ null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const pickupRef = useRef();
  const dropRef = useRef();

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyDJlbhYyDTemG0tYpyObolvcmjdkrmt3w4',
    // libraries: [...LIBRARIES],
  });

  const handleTranslateSearchCabsArrow = (isTranslate) => {
    setTranslateSearchCabsArrow(isTranslate);
  }

  const calculateRoute = async () => {
    debugger;
    if (pickupRef.current.value === '' || dropRef.current.value === '') {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: pickupRef.current.value,
      destination: dropRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    });
    setDirectionsResponse(results);
    console.log(results.routes[0].legs[0].distance.text); // set this value in state
    console.log(results.routes[0].legs[0].duration.text); // set this value in state
  }

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    pickupRef.origin.value = '';
    dropRef.origin.value = '';
  }

  return (
    <div className="App">
      {/* Skeleton until map is loaded */}
      {!isLoaded &&
        <div className="shadow rounded-md p-4 h-[100vh]">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* Google Map Section */}
      {isLoaded &&
        <section>
          {/* <Temp Autocomplete={Autocomplete} translateSearchCabsArrow={translateSearchCabsArrow} handleTranslateSearchCabsArrow={handleTranslateSearchCabsArrow} pickupRef={pickupRef} dropRef={dropRef} calculateRoute={calculateRoute} /> */}
          <GoogleMap
            center={CENTER}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            // onLoad={map => setMap(map)} 
            >
            <Marker position={CENTER} />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
        </section>
      }
    </div>
  );
}

export default App;
