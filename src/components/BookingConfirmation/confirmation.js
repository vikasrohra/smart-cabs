import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirmation(props) {
  const { cabDetails } = { ...props };
  console.log('props', props);

  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl text-base font-bold mt-4 text-center'>
        Congratulations! your Smart ride with{' '}
        {cabDetails.cabType === 'Any' ? 'Mini' : cabDetails.cabType} cab is booked
        successfully.
      </h1>
      <div className="card w-full md:w-96 bg-neutral text-neutral-content mt-8">
        <div className="card-body items-center text-center">
          <div className="card-title flex flex-col">
            <div className='stat-title text-sm'>Ride Fare</div>
            <div className='stat-value -mt-4'>
              {cabDetails.cabType === 'Any'
                ? cabDetails.fare.split(' - ')[0]
                : cabDetails.fare}
            </div>
          </div>
          <div className='stat-actions'>
            <button className='btn btn-xs btn-active btn-ghost cursor-default text-xs'>
              {cabDetails.cabType === 'Any'
                ? 'Mini - ' + cabDetails.away
                : cabDetails.cabType + ' - ' + cabDetails.away}
            </button>
          </div>
          <div className='stat-actions flex flex-col items-center justify-between w-full md:flex-row'>
            <span className='badge badge-sm badge-warning mt-3 md:mt-0'>
              <span className='font-semibold'>Distance:</span>{' '}
              <span className='font-bold'>{cabDetails.distance}</span>
            </span>
            <span className='badge badge-sm badge-warning mt-8 md:mt-0'>
              <span className='font-semibold'>Ride duration:</span>{' '}
              <span className='font-bold'>{cabDetails.duration}</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className='tooltip tooltip-bottom tooltip-info'
        data-tip='Go back to search more cabs'
      >
        <button
          className='btn btn-active btn-ghost mt-8'
          onClick={() => navigate('/cab-booking')}
        >
          <i className='fa-solid fa-arrow-left'></i>
        </button>
      </div>
    </div>
  );
}
