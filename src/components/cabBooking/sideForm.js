// Library imports
import React from 'react';
import { Autocomplete } from '@react-google-maps/api';

export default function SideForm(props) {
  const {
    calculateRoute,
    pickupRequiredValidationFlag,
    dropRequiredValidationFlag,
    pickupRef,
    dropRef,
    handleGoBackHomeClick,
    clearRoute,
    currentLocation,
    isGetCurrentLocationIconClicked,
    getReverseGeocodingData,
    center,
    handlePickUpChange,
    translatePickupDropForm,
    togglePickupDropFormVisibility,
  } = { ...props };

  return (
    <div
      className={`card w-[80%] md:w-[40%] lg:w-[30%] xl:w-[22%] bg-base-100 bg-neutral text-neutral-content absolute top-0 left-0 z-40 rounded-l-none rounded-r-none ${
        translatePickupDropForm ? '' : '-translate-x-[25rem]'
      } ease-in-out duration-500`}
    >
      <div className='card-body text-center w-full h-[100vh] overflow-y-auto p-4'>
        <div className='w-full'>
          <div className='flex justify-between items-center'>
            <button
              className='btn btn-sm btn-active btn-ghost'
              onClick={handleGoBackHomeClick}
            >
              Go Back Home
            </button>
            <div
              className={`label-text-alt tooltip tooltip-left tooltip-info text-xs`}
              data-tip='Collapse'
            >
              <button
                className='btn btn-sm btn-active btn-ghost btn-square'
                onClick={togglePickupDropFormVisibility}
              >
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Pickup */}
          <div className='form-control mt-8'>
            <label className='label'>
              <span className='label-text'>
                Pickup?
                <div
                  className={`label-text-alt tooltip tooltip-right tooltip-info text-xs`}
                  data-tip='Use current location'
                >
                  <span
                    className='cursor-pointer btn btn-sm btn-active btn-ghost ml-3'
                    onClick={() => getReverseGeocodingData(center)}
                  >
                    <i className='fa-solid fa-location-arrow'></i>
                  </span>
                </div>
              </span>
            </label>            
            <div className='indicator w-full'>
              {pickupRequiredValidationFlag && (
                <span className='indicator-item badge badge-error right-9'>
                  Required
                </span>
              )}
              <div className='w-full'>
                {isGetCurrentLocationIconClicked && (
                  <input
                    type='text'
                    ref={pickupRef}
                    placeholder='Type here'
                    value={currentLocation}
                    onChange={handlePickUpChange}
                    className={`input input-bordered w-full ${
                      pickupRequiredValidationFlag ? 'input-error' : ''
                    }`}
                  />
                )}
                {!isGetCurrentLocationIconClicked && (
                  <Autocomplete>
                    <input
                      type='text'
                      ref={pickupRef}
                      placeholder='Type here'
                      className={`input input-bordered w-full ${
                        pickupRequiredValidationFlag ? 'input-error' : ''
                      }`}
                    />
                  </Autocomplete>
                )}
              </div>
            </div>
            <label className='label'>
              {pickupRequiredValidationFlag && (
                <span className='label-text-alt'>
                  Type atleast 1 character, we'll help you out
                </span>
              )}
            </label>
          </div>
          {/* Drop */}
          <div className='form-control mt-0'>
            <label className='label'>
              <span className='label-text'>Drop?</span>
            </label>            
            <div className='indicator w-full'>
              {dropRequiredValidationFlag && (
                <span className='indicator-item badge badge-error right-9'>
                  Required
                </span>
              )}
              <div className='w-full'>
                <Autocomplete>
                  <input
                    type='text'
                    ref={dropRef}
                    placeholder='Type here'
                    className={`input input-bordered w-full ${
                      dropRequiredValidationFlag ? 'input-error' : ''
                    }`}
                  />
                </Autocomplete>
              </div>
            </div>
            {dropRequiredValidationFlag && (
              <label className='label'>
                <span className='label-text-alt'>
                  Type atleast 1 character, we'll help you out
                </span>
              </label>
            )}
          </div>
          {/* Action Buttons */}
          <div className='mt-12 flex justify-end'>
            <div
              className='tooltip tooltip-bottom tooltip-warning'
              data-tip='Clear all fields'
            >
              <button
                className='btn btn-active btn-ghost mr-4'
                onClick={clearRoute}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div
              className='tooltip tooltip-left tooltip-success'
              data-tip='Search a Smart Cab'
            >
              <label
                htmlFor={`${
                  !pickupRequiredValidationFlag && !dropRequiredValidationFlag
                    ? 'side-drawer'
                    : ''
                }`}
                className='btn btn-primary'
                onClick={calculateRoute}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
