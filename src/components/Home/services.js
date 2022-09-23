const Services = () => {
  return (
    <>
      {/* Services */}
      <div className='card bg-base-100 shadow-xl w-full rounded-none px-4 md:px-7 lg:px-4 xl:px-7'>
        <div className='card-body flex flex-col space-y-6 md:space-y-0 md:flex-row md:flex-wrap xl:flex-nowrap px-0'>
          <div className='flex items-center md:mb-6 xl:mb-0 md:w-[49%]'>
            <img src={`${require('../../assets/images/offer_icon1.png')}`} />
            <p className='flex flex-col text-left ml-3'>
              <span className='text-lg font-semibold'>
                Best Price Guaranteed
              </span>
              <span className='text-md font-light'>
                From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket
              </span>
            </p>
          </div>
          <div className='flex items-center md:items-start lg:items-center md:mb-6 xl:mb-0 md:w-[49%]'>
            <img src={`${require('../../assets/images/offer_icon2.png')}`} />
            <p className='flex flex-col text-left ml-3'>
              <span className='text-lg font-semibold'>24/7 Customer Care</span>
              <span className='text-md font-light'>
                A dedicated 24x7 customer support team always at your service to help solve any problem
              </span>
            </p>
          </div>
          <div className='flex items-center md:w-[49%]'>
            <img src={`${require('../../assets/images/offer_icon3.png')}`} />
            <p className='flex flex-col text-left ml-3'>
              <span className='text-lg font-semibold'>Home Pickups</span>
              <span className='text-md font-light'>
                Home pickups is just few steps away
              </span>
            </p>
          </div>
          <div className='flex items-center md:w-[49%]'>
            <img src={`${require('../../assets/images/offer_icon4.png')}`} />
            <p className='flex flex-col text-left ml-3'>
              <span className='text-lg font-semibold'>Easy Bookings</span>
              <span className='text-md font-light'>
                A more recently with desktop softy like aldus page maker.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
