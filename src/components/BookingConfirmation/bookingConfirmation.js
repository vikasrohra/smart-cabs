import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Confirmation from './confirmation'

export default function BookingConfirmation() {
  const [cabDetails, setCabDetails] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setCabDetails(location.state.selectedCab);
  }, [location]);

  return (
    <>
    {/* !cabDetails then show skeleton */}
    {cabDetails && 
      <Confirmation cabDetails={cabDetails} />
    }
    </>
  )
}
