const Temp = (props) => {
    const { Autocomplete, translateSearchCabsArrow, handleTranslateSearchCabsArrow, pickupRef, dropRef, calculateRoute } = { ...props };

    return (
        <>
            {/* Navbar */}
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Company
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100 ml-[0.670rem]">
                                    <li><a>About Us</a></li>
                                    <li><a>How SmartCabs Works</a></li>
                                </ul>
                            </li>
                            <li><a>Services</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-normal">
                        <img src={`${require('../assets/images/4781517.png')}`} className='w-10 h-10 -ml-4 lg:ml-0' alt="SmartCabs Logo" />
                        <span className='text-[#cf462a]'>Smart</span>
                        <span className='font-extrabold text-warning'>Cabs</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                Company
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><a>About Us</a></li>
                                <li><a>How SmartCabs Works</a></li>
                            </ul>
                        </li>
                        <li><a>Services</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={`${require('../assets/images/owner.png')}`} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </a>
                            </li>
                            <li>
                                <a className="justify-between">
                                    Settings
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                                </a>
                            </li>
                            <li>
                                <div className="divider"></div>
                            </li>
                            <li>
                                <a className="justify-between">
                                    Logout
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Hero */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${require("../assets/images/back_image.jpg")})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Always the ride you want!</h1>
                        <p className="py-6">Request a ride at any time and on any day of the year. Tap and let your driver take you where you want to go. Compare prices on every kind of ride, from daily commutes to special evenings out.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title text-gray-700 dark:text-gray-300 mx-auto animate-bounce">Book a Smart Cab</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pickup</span>
                                </label>
                                <div className="indicator w-full">
                                    <span className="indicator-item badge badge-error right-2">Required</span>
                                    <div className='w-full'>
                                        <Autocomplete>
                                            <input type="text" placeholder="Type here..." className="input input-bordered w-full" ref={pickupRef} />
                                        </Autocomplete>
                                    </div>
                                </div>
                                {/* <input type="text" placeholder="Type here..." className="input input-bordered" /> */}
                                <label className="label">
                                    <span className="label-text-alt">Type atleast 3 characters we'll help you out</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Drop</span>
                                </label>
                                <div className="indicator w-full">
                                    <span className="indicator-item badge badge-error right-2">Required</span>
                                    <div className='w-full'>
                                        <Autocomplete>
                                            <input type="text" placeholder="Type here..." className="input input-bordered w-full" ref={dropRef} />
                                        </Autocomplete>
                                    </div>
                                </div>
                                {/* <input type="text" placeholder="Type here..." className="input input-bordered" /> */}
                                <label className="label">
                                    <span className="label-text-alt">Type atleast 3 characters we'll help you out</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onMouseEnter={() => handleTranslateSearchCabsArrow(true)} onMouseLeave={() => handleTranslateSearchCabsArrow(false)} onClick={calculateRoute}>
                                    Search Cabs
                                    <img src={`${require('../assets/images/fleet_1.png')}`} className={`w-14 h-6 ml-2 ${translateSearchCabsArrow ? 'translate-x-8 translate-x-14 ease-in-out duration-150 delay-100' : 'translate-x-0 ease-in-out duration-150 delay-100'}`} />
                                    {/* <svg className={`w-6 h-6 ml-2 ${translateSearchCabsArrow ? 'translate-x-20 ease-in-out duration-150 delay-100' : 'translate-x-0 ease-in-out duration-150 delay-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="card bg-base-100 shadow-xl w-full rounded-none px-4 md:px-7 lg:px-4 xl:px-7">
                <div className="card-body flex flex-col space-y-6 md:space-y-0 md:flex-row md:flex-wrap xl:flex-nowrap px-0">
                    <div className='flex items-center md:mb-6 xl:mb-0 md:w-[49%]'>
                        <img src={`${require('../assets/images/offer_icon1.png')}`} />
                        <p className='flex flex-col text-left ml-3'>
                            <span className='text-lg font-semibold'>
                                Best Price Guaranteed
                            </span>
                            <span className='text-md font-light'>
                                A more recently with desktop softy like aldus page maker.
                            </span>
                        </p>
                    </div>
                    <div className='flex items-center md:items-start lg:items-center md:mb-6 xl:mb-0 md:w-[49%]'>
                        <img src={`${require('../assets/images/offer_icon2.png')}`} />
                        <p className='flex flex-col text-left ml-3'>
                            <span className='text-lg font-semibold'>
                                24/7 Customer Care
                            </span>
                            <span className='text-md font-light'>
                                A more recently with desktop softy like aldus page maker.
                            </span>
                        </p>
                    </div>
                    <div className='flex items-center md:w-[49%]'>
                        <img src={`${require('../assets/images/offer_icon3.png')}`} />
                        <p className='flex flex-col text-left ml-3'>
                            <span className='text-lg font-semibold'>
                                Home Pickups
                            </span>
                            <span className='text-md font-light'>
                                A more recently with desktop softy like aldus page maker.
                            </span>
                        </p>
                    </div>
                    <div className='flex items-center md:w-[49%]'>
                        <img src={`${require('../assets/images/offer_icon4.png')}`} />
                        <p className='flex flex-col text-left ml-3'>
                            <span className='text-lg font-semibold'>
                                Easy Bookings
                            </span>
                            <span className='text-md font-light'>
                                A more recently with desktop softy like aldus page maker.
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Who We Are */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={`${require('../assets/images/cab.png')}`} className="" />
                    <div className='text-center mt-5 lg:text-left lg:mt-0'>
                        <h1 className="text-5xl font-bold">Who We Are</h1>
                        <p className="py-6 mb-3">Lorem Ipsum passages, and more recently with desktop publishing software like aldus pageMaker including versions of all the Lorem Ipsum generators on thet Internet tends to repeat predefined chunks as necessary, making this an web evolved over the years, sometimes by accident.</p>
                        {/* Stats */}
                        <div className="stats stats-vertical md:stats-horizontal shadow">
                            <div className="stat">
                                <div className="stat-title">Happy Customers</div>
                                <div className="stat-value">100%</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Luxury Cars</div>
                                <div className="stat-value">200+</div>
                            </div>

                            <div className="stat">
                                <div className="stat-title">Kilometers Driven</div>
                                <div className="stat-value">50,000+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Car Fleet */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-reverse lg:flex-row">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full justify-center">
                            <img src={`${require('../assets/images/fleet_1.png')}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={`${require('../assets/images/fleet_1.png')}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={`${require('../assets/images/fleet_2.png')}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={`${require('../assets/images/fleet_3.png')}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className="text-5xl font-bold">Our Car Fleet!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Temp;