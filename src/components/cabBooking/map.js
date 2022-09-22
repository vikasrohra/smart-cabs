import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useCallback } from 'react';

const CONTAINER_STYLE = {
  width: '100%',
  height: '100%',
};

const Map = (props) => {
  const { center, setMap, directionsResponse } = { ...props };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, [])

  return (
    <>
      {/* Google Map Section */}
      {/* <section className='w-full h-[100vh] absolute top-0 -z-50'> */}
      <section className='w-full h-[100vh]'>
        <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={CONTAINER_STYLE}
            onLoad={map => setMap(map)}             
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            clickableIcons= {true}
            onUnmount={onUnmount}
            >
            <Marker position={center} />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
      </section>
    </>
  );
};

export default Map;
