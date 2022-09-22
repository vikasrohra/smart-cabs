import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './header';
import Services from './services';
import WhoWeAre from './whoWeAre';
import FareChart from './fareChart';

const Home = () => {
  const [translateSearchCabsArrow, setTranslateSearchCabsArrow] =
    useState(false);

  let navigate = useNavigate();

  const redirectToCabBookingPage = () => {
    navigate('/cab-booking');
  }

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
      {/* Fare chart modal */}
      <FareChart />
    </>
  );
};

export default Home;
