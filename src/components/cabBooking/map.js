import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';

const Map = (props) => {
  const { center, setMap, directionsResponse } = { ...props };

  return (
    <>
      {/* Google Map Section */}
      <section className='w-full h-[100vh] absolute top-0 -z-50'>
        <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            // onLoad={map => setMap(map)} 
            >
            <Marker position={center} />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
      </section>
    </>
  );
};

export default Map;
