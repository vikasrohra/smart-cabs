import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirmation(props) {
  const { cabDetails } = { ...props };
  console.log('props', props);

  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl text-base font-bold mt-4'>
        Congratulations! your Smart ride with{' '}
        {cabDetails.cabType === 'Any' ? 'Mini' : cabDetails.cabType} cab booked
        successfully.
      </h1>
      <div className='stats bg-neutral text-neutral-content mt-4'>
        <div className='stat'>
          <div className='stat-title'>Ride Fare</div>
          <div className='stat-value'>
            {cabDetails.cabType === 'Any'
              ? cabDetails.fare.split(' - ')[0]
              : cabDetails.fare}
          </div>
          <div className='stat-actions'>
            <button className='btn btn-sm btn-success'>
              {cabDetails.cabType === 'Any'
                ? 'Mini - ' + cabDetails.away
                : cabDetails.cabType + ' - ' + cabDetails.away}
            </button>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-actions flex flex-col'>
            <span className='badge badge-lg badge-warning'>
              <span className='font-semibold'>Distance:</span>{' '}
              <span className='font-bold'>{cabDetails.distance}</span>
            </span>
            <span className='badge badge-lg badge-warning mt-4'>
              <span className='font-semibold'>Estimated time of drop:</span>{' '}
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
          className='btn btn-active btn-ghost mt-4'
          onClick={() => navigate('/cab-booking')}
        >
          <i className='fa-solid fa-arrow-left'></i>
        </button>
      </div>
    </div>
  );
}
