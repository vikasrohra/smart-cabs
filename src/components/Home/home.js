// Library imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Component imports
import Header from './header';
import Services from './services';
import WhoWeAre from './whoWeAre';
import FareChart from './fareChart';

const Home = () => {
  // State to handle animation for "Book A Smart Ride" button
  const [translateSearchCabsArrow, setTranslateSearchCabsArrow] = useState(false);

  let navigate = useNavigate();

  // Redirection to a cab booking page
  const redirectToCabBookingPage = () => {
    navigate('/cab-booking');
  }

  // To enable/disable animation of a "Book A Smart Ride" button
  const handleTranslateSearchCabsArrow = (isTranslate) => {
    setTranslateSearchCabsArrow(isTranslate);
  };

  return (
    <>
      <Header
        translateSearchCabsArrow={translateSearchCabsArrow}
        handleTranslateSearchCabsArrow={handleTranslateSearchCabsArrow}
        redirectToCabBookingPage={redirectToCabBookingPage}
      />
      <Services />
      <WhoWeAre />
      <FareChart />
    </>
  );
};

export default Home;
