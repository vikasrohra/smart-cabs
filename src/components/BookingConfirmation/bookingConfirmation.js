// Library imports
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Component imports
import Confirmation from './confirmation';

export default function BookingConfirmation() {
  const [cabDetails, setCabDetails] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setCabDetails(location.state.selectedCab);
  }, [location]);

  return (
    <>
      {!cabDetails &&
        <div className='h-[100vh] w-full flex justify-center items-center'>
          <img className='w-20 h-14' src={`${require('../../assets/images/loader.gif')}`} alt="loader" />
        </div>
      }
      {cabDetails &&
        <Confirmation cabDetails={cabDetails} />
      }
    </>
  )
}
