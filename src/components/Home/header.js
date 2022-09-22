const Header = (props) => {
  const { translateSearchCabsArrow, handleTranslateSearchCabsArrow, redirectToCabBookingPage } = {
    ...props,
  };

  return (
    <>
      {/* Navbar */}
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Home</a>
              </li>              
              <li>
                <label htmlFor="fare-chart-modal">Fare Chart</label>
              </li>
            </ul>
          </div>
          <a className='btn btn-ghost normal-case text-xl font-normal'>
            <img
              src={`${require('../../assets/images/logo.png')}`}
              className='w-10 h-10 -ml-4 lg:ml-0'
              alt='SmartCabs Logo'
            />
            <span className='text-[#cf462a]'>Smart</span>
            <span className='font-extrabold text-warning'>Cabs</span>
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <a>Home</a>
            </li>            
            <li>
              <label htmlFor="fare-chart-modal">Fare Chart</label>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src={`${require('../../assets/images/owner.png')}`} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>
                  Profile
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
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className='justify-between'>
                  Settings
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
                      d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <div className='divider'></div>
              </li>
              <li>
                <a className='justify-between'>
                  Logout
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
                      d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div
        className='hero min-h-screen'
        style={{
          backgroundImage: `url(${require('../../assets/images/back_image.webp')})`,
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='w-full'>
            <h1 className='mb-5 text-5xl font-bold'>
              Always the ride you want!
            </h1>
            <p className='mb-5 max-w-2xl'>
              Request a ride at any time and on any day of the year. Tap and let
              your driver take you where you want to go. Compare prices on every
              kind of ride, from daily commutes to special evenings out.
            </p>
            <button
              className='btn btn-lg btn-primary'
              onMouseEnter={() => handleTranslateSearchCabsArrow(true)}
              onMouseLeave={() => handleTranslateSearchCabsArrow(false)}
              onTouchStart={() => handleTranslateSearchCabsArrow(true)}
              onTouchEnd={() => handleTranslateSearchCabsArrow(false)}
              onClick={redirectToCabBookingPage}
            >
              Book a Smart Cab
              <img
                src={`${require('../../assets/images/fleet_1.png')}`}
                className={`w-14 h-6 ml-2 ${translateSearchCabsArrow
                    ? 'translate-x-4 ease-in-out duration-150 delay-100'
                    : 'translate-x-0 ease-in-out duration-150 delay-100'
                  }`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
