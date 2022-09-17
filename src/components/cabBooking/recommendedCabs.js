import { render } from '@testing-library/react';
import React from 'react';

export default function RecommendedCabs(props) {
  const {
    translateRecommendedCabs,
    toggleRecommendedCabsVisibility,
    recommendedSelectedCab,
    handleRecommendedCabChange,
    distance,
    duration
  } = { ...props };

  const renderButtonText = (buttonTextId) => {
    switch (buttonTextId) {
      case 1:
        return 'Any';
      case 2:
        return 'Auto';
      case 3:
        return 'Mini';
      case 4:
        return 'Prime Play';
      case 5:
        return 'Prime Sedan';
      case 6:
        return 'Prime SUV';
      case 7:
        return 'Prime EXEC';
      default:
        return 'Any';
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div
        className={`card rounded-b-none rounded-t-6 w-[100vw] md:w-[70vw] lg:w-[50vw] bg-base-100 fixed z-40 bottom-0 lg:right-0 xl:right-auto bg-neutral text-neutral-content ${
          translateRecommendedCabs ? '' : 'translate-y-[24rem]'
        } ease-in-out duration-500`}
      >
        <div className='card-body p-0 pt-4'>
          <div
            className='h-1.5 bg-gray-500 rounded w-16 cursor-pointer mx-auto'
            onClick={toggleRecommendedCabsVisibility}
          ></div>
          <h2 className='card-title mx-auto'>Recommended Cabs</h2>
          <div className='flex justify-between text-xs px-2'>
            <span>Distance: <span className="badge badge-warning badge-sm text-xs font-bold">{distance}</span></span>
            <span>Estimated time of drop: <span className="badge badge-warning badge-sm text-xs font-bold">{duration}</span></span>
          </div>
          <ul className='menu bg-neutral text-neutral-content h-72 overflow-y-auto'>
            <li
              className={`${
                recommendedSelectedCab === 1 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(1)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-6'
                    src={`${require('../../assets/images/fleet_1.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>2 mins away</span>
                </div>
                <a className='ml-5'>Book Any</a>
                <p className='flex-1 text-right'>&#8377;121 - &#8377;182</p>
              </div>
            </li>
            <li
              className={`${
                recommendedSelectedCab === 2 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(2)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-10'
                    src={`${require('../../assets/images/auto.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>3 mins away</span>
                </div>
                <a className='ml-5'>Auto</a>
                <p className='flex-1 text-right'>&#8377;85</p>
              </div>
            </li>
            <li
              className={`${
                recommendedSelectedCab === 3 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(3)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-6'
                    src={`${require('../../assets/images/fleet_3.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>2 mins away</span>
                </div>
                <a className='ml-5'>Mini</a>
                <p className='flex-1 text-right'>&#8377;121</p>
              </div>
            </li>
            <li
              className={`${
                recommendedSelectedCab === 4 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(4)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-6'
                    src={`${require('../../assets/images/fleet_1.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>6 mins away</span>
                </div>
                <a className='ml-5'>Prime Play</a>
                <p className='flex-1 text-right'>&#8377;182</p>
              </div>
            </li>
            <li
              className={`${
                recommendedSelectedCab === 5 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(5)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-6'
                    src={`${require('../../assets/images/fleet_2.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>5 mins away</span>
                </div>
                <a className='ml-5'>Prime Sedan</a>
                <p className='flex-1 text-right'>&#8377;167</p>
              </div>
            </li>
            <li
              className={`${
                recommendedSelectedCab === 6 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(6)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-6'
                    src={`${require('../../assets/images/fleet_3.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>6 mins away</span>
                </div>
                <a className='ml-5'>Prime SUV</a>
                <p className='flex-1 text-right'>&#8377;247</p>
              </div>
            </li>
            <li
              className={`${
                recommendedSelectedCab === 7 ? 'bordered bg-gray-800' : ''
              }`}
              onClick={() => handleRecommendedCabChange(7)}
            >
              <div className='flex'>
                <div className='flex flex-col'>
                  <img
                    className='w-14 h-6'
                    src={`${require('../../assets/images/fleet_1.png')}`}
                    alt='Book any'
                  />
                  <span className='text-xs'>no cabs</span>
                </div>
                <a className='ml-5'>Prime EXEC</a>
                <p className='flex-1 text-right'>&#8377;220</p>
              </div>
            </li>
          </ul>
          <button
            className='btn btn-lg btn-primary rounded-none '
            // onClick={redirectToCabBookingPage}
          >
            Book {renderButtonText(recommendedSelectedCab)}
          </button>
        </div>
      </div>
    </div>
  );
}
