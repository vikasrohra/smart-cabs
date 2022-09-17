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
    clearRoute
  } = { ...props };

  return (
    <div className='drawer drawer-mobile'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center fixed'>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          <i className='fa-solid fa-chevron-right'></i>
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <div className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content bg-neutral text-neutral-content'>
          <div className='flex flex-col items-end'>
            <button
              className='btn btn-xs btn-ghost'
              onClick={handleGoBackHomeClick}
            >
              Go Back Home
            </button>
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
                    className={`input input-bordered w-full ${
                      pickupRequiredValidationFlag ? 'input-error' : ''
                    }`}
                  />
                </Autocomplete>
              </div>
            </div>
            {pickupRequiredValidationFlag && (
              <label className='label'>
                <span className='label-text-alt'>
                  Type atleast 1 character, we'll help you out
                </span>
              </label>
            )}
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
              <button className='btn btn-active btn-ghost mr-4' onClick={clearRoute}>
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
              <button className='btn btn-primary' onClick={calculateRoute}>
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
