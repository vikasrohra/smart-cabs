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
    getCurrentLocation,
    currentLocation,
    isGetCurrentLocationIconClicked,
  } = { ...props };

  return (
    // <div className='drawer drawer-mobile'>
    <div className='drawer'>
      <input id='side-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center fixed'>
        <div className='tooltip tooltip-right tooltip-info' data-tip='Expand'>
          <label
            htmlFor='side-drawer'
            // className='btn btn-primary drawer-button lg:hidden'
            className='btn btn-xs btn-active btn-primary rounded-l-none drawer-button -translate-x-0.5 no-animation'
          >
            <i className='fa-solid fa-chevron-right'></i>
          </label>
        </div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='side-drawer' className='drawer-overlay'></label>
        <div className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-neutral text-neutral-content'>
          <div className='flex justify-between'>
            <button
              className='btn btn-xs btn-ghost'
              onClick={handleGoBackHomeClick}
            >
              Go Back Home
            </button>
            <div
              className='tooltip tooltip-left tooltip-info'
              data-tip='Collapse'
            >
              <label htmlFor='side-drawer' className='btn btn-xs btn-ghost'>
                <i className='fa-solid fa-chevron-left'></i>
              </label>
            </div>
          </div>
          <div className='form-control mt-8'>
            <label className='label'>
              <span className='label-text'>Pickup?</span>
            </label>
            {/* <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            /> */}
            <div className='indicator w-full'>
              {pickupRequiredValidationFlag && (
                <span className='indicator-item badge badge-error right-9'>
                  Required
                </span>
              )}
              <div className='w-full'>
                <Autocomplete>
                  <input
                    type='text'
                    ref={pickupRef}
                    placeholder='Type here'
                    value={isGetCurrentLocationIconClicked && currentLocation}
                    className={`input input-bordered w-full ${
                      pickupRequiredValidationFlag ? 'input-error' : ''
                    }`}
                  />
                </Autocomplete>
              </div>
            </div>
            <label className='label'>
              {pickupRequiredValidationFlag && (
                <span className='label-text-alt'>
                  Type atleast 1 character, we'll help you out
                </span>
              )}
              <div
                className={`label-text-alt tooltip ${pickupRequiredValidationFlag ? "tooltip-left" : "tooltip-right"} tooltip-warning text-xs`}
                data-tip='Use current location'
              >
                <span className='cursor-pointer btn btn-xs btn-ghost' onClick={() => getCurrentLocation(true)}>
                  <i className='fa-solid fa-location-dot'></i>
                </span>
              </div>
            </label>
          </div>
          <div className='form-control mt-4'>
            <label className='label'>
              <span className='label-text'>Drop?</span>
            </label>
            {/* <input
              type='text'
              placeholder='Type here'
              className='input input-bordered w-full max-w-xs'
            /> */}
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
