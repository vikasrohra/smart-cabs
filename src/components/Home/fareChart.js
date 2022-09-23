const FareChart = () => {
    return (
        <>
            <input type="checkbox" id="fare-chart-modal" className="modal-toggle" />
            <label htmlFor="fare-chart-modal" className="modal modal-bottom sm:modal-middle cursor-pointer">
                <label className="modal-box relative border border-gray-700 shadow-inner" for="">
                    <label htmlFor="fare-chart-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Fare Chart</h3>
                    <div className="py-16 w-full">
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto">
                                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-500 sm:flex-row flex-col">
                                    <div className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <img
                                            className={`w-20 h-8`}
                                            src={`${require('../../assets/images/fleet_1.png')}`}
                                            alt='Book any'
                                        />
                                    </div>
                                    <div className="flex-grow text-left mt-6 sm:mt-0">
                                        <h2 className="text-gray-300 text-lg title-font font-medium mb-2 text-center md:text-left">Mini</h2>
                                        <p>
                                            <span className='text-sm text-gray-400'>Charge/KM:</span>
                                            <span className="badge badge-sm ml-2">₹11 for first 20 KMs after that ₹20/KM</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Base Price:</span>
                                            <span className="badge badge-sm ml-2">₹50 for first 5 KMs</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Ride Time Charge:</span>
                                            <span className="badge badge-sm ml-2">₹1/min</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Service Tax:</span>
                                            <span className="badge badge-sm ml-2">5.6%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-500 sm:flex-row flex-col">
                                    <div className="flex-grow text-left mt-6 sm:mt-0">
                                        <h2 className="text-gray-300 text-lg title-font font-medium mb-2 text-center md:text-left">Smart Play</h2>
                                        <p>
                                            <span className='text-sm text-gray-400'>Charge/KM:</span>
                                            <span className="badge badge-sm ml-2">₹13 for first 20 KMs after that ₹25/KM</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Base Price:</span>
                                            <span className="badge badge-sm ml-2">₹60 for first 5 KMs</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Ride Time Charge:</span>
                                            <span className="badge badge-sm ml-2">₹1/min</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Service Tax:</span>
                                            <span className="badge badge-sm ml-2">5.6%</span>
                                        </p>
                                    </div>
                                    <div className="sm:w-24 sm:order-none order-first sm:h-24 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <img
                                            className={`w-20 h-8`}
                                            src={`${require('../../assets/images/fleet_2.png')}`}
                                            alt='Book any'
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-500 sm:flex-row flex-col">
                                    <div className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <img
                                            className={`w-20 h-8`}
                                            src={`${require('../../assets/images/fleet_3.png')}`}
                                            alt='Book any'
                                        />
                                    </div>
                                    <div className="flex-grow text-left mt-6 sm:mt-0">
                                        <h2 className="text-gray-300 text-lg title-font font-medium mb-2 text-center md:text-left">Smart Sedan</h2>
                                        <p>
                                            <span className='text-sm text-gray-400'>Charge/KM:</span>
                                            <span className="badge badge-sm ml-2">₹15 for first 20 KMs after that ₹30/KM</span>
                                        </p>
                                        <p>
                                            <span className='text-smtext-gray-400'>Base Price:</span>
                                            <span className="badge badge-sm ml-2">₹70 for first 5 KMs</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Ride Time Charge:</span>
                                            <span className="badge badge-sm ml-2">₹1/min</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Service Tax:</span>
                                            <span className="badge badge-sm ml-2">5.6%</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-500 sm:flex-row flex-col">
                                    <div className="flex-grow text-left mt-6 sm:mt-0">
                                        <h2 className="text-gray-300 text-lg title-font font-medium mb-2 text-center md:text-left">Smart SUV</h2>
                                        <p>
                                            <span className='text-sm text-gray-400'>Charge/KM:</span>
                                            <span className="badge badge-sm ml-2">₹18 for first 20 KMs after that ₹35/KM</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Base Price:</span>
                                            <span className="badge badge-sm ml-2">₹80 for first 5 KMs</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Ride Time Charge:</span>
                                            <span className="badge badge-sm ml-2">₹1/min</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Service Tax:</span>
                                            <span className="badge badge-sm ml-2">5.6%</span>
                                        </p>
                                    </div>
                                    <div className="sm:w-24 sm:order-none order-first sm:h-24 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <img
                                            className={`w-20 h-8`}
                                            src={`${require('../../assets/images/fleet_4.png')}`}
                                            alt='Book any'
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mx-auto sm:flex-row flex-col">
                                    <div className="sm:w-24 sm:h-24 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                        <img
                                            className={`w-20 h-8`}
                                            src={`${require('../../assets/images/fleet_5.png')}`}
                                            alt='Book any'
                                        />
                                    </div>
                                    <div className="flex-grow text-left mt-6 sm:mt-0">
                                        <h2 className="text-gray-300 text-lg title-font font-medium mb-2 text-center md:text-left">Smart EXEC</h2>
                                        <p>
                                            <span className='text-sm text-gray-400'>Charge/KM:</span>
                                            <span className="badge badge-sm ml-2">₹21 for first 20 KMs after that ₹40/KM</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Base Price:</span>
                                            <span className="badge badge-sm ml-2">₹100 for first 5 KMs</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Ride Time Charge:</span>
                                            <span className="badge badge-sm ml-2">₹1/min</span>
                                        </p>
                                        <p>
                                            <span className='text-sm text-gray-400'>Service Tax:</span>
                                            <span className="badge badge-sm ml-2">5.6%</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </label>
            </label>
        </>
    )
}

export default FareChart;