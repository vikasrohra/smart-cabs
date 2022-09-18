import { render } from '@testing-library/react';
import React from 'react';
import getCabName from '../utility/getCabName';

export default function RecommendedCabs(props) {
  const {
    translateRecommendedCabs,
    toggleRecommendedCabsVisibility,
    recommendedSelectedCab,
    handleRecommendedCabChange,
    distance,
    duration,
    cabsData,
    redirectToConfirmationPage,
  } = { ...props };

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
            <span>
              Distance:{' '}
              <span className='badge badge-warning badge-sm text-xs font-bold'>
                {distance}
              </span>
            </span>
            <span>
              Estimated time of drop:{' '}
              <span className='badge badge-warning badge-sm text-xs font-bold'>
                {duration}
              </span>
            </span>
          </div>
          <ul className='menu bg-neutral text-neutral-content h-72 overflow-y-auto'>
            {/* Show Skeleton */}
            {!cabsData && null}
            {cabsData?.map((cabData, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    recommendedSelectedCab === cabData.id
                      ? 'bordered bg-gray-800 ease-in-out duration-150 delay-100'
                      : ''
                  }`}
                  onClick={() => handleRecommendedCabChange(cabData.id)}
                >
                  <div className='flex'>
                    <div className='flex flex-col'>
                      <img
                        className={`w-14 h-6 ${recommendedSelectedCab === cabData.id ? 'scale-125 ease-in-out duration-150 delay-100' : ''}`}
                        src={`${require(`../../assets/images/fleet_${
                          cabData.id + 1
                        }.png`)}`}
                        alt='Book any'
                      />
                      <span className={`text-xs ${recommendedSelectedCab === cabData.id ? 'font-bold ease-in-out duration-150 delay-100' : 'font-normal'}`}>{cabData.away}</span>
                    </div>
                    <a
                      className={`ml-5 ${
                        recommendedSelectedCab === cabData.id
                          ? 'font-bold ease-in-out duration-150 delay-100'
                          : 'font-normal'
                      }`}
                    >
                      {cabData.name}
                    </a>
                    <p className={`flex-1 text-right ${recommendedSelectedCab === cabData.id ? 'font-bold ease-in-out duration-150 delay-100' : 'font-normal'}`}>{cabData.fare}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            className='btn btn-lg btn-primary rounded-none'
            onClick={() => redirectToConfirmationPage(recommendedSelectedCab)}
          >
            Book {getCabName(recommendedSelectedCab)}
          </button>
        </div>
      </div>
    </div>
  );
}
