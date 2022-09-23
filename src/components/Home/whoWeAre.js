const WhoWeAre = () => {
  return (
    <>
      {/* Who We Are */}
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={`${require('../../assets/images/cab.png')}`} alt="services"  />
          <div className='text-center mt-5 lg:text-left lg:mt-0'>
            <h1 className='text-5xl font-bold'>Who We Are</h1>
            <p className='py-6 mb-3'>
            SmartCabs is a mobility platform, serving many cities across India. The SmartCabs offers mobility solutions by connecting customers to drivers and a wide range of vehicles across bikes, auto-rickshaws, metered taxis, and cabs, enabling convenience and transparency for hundreds of millions of consumers and over 1.5 million driver-partners.
            </p>
            {/* Stats */}
            <div className='stats stats-vertical md:stats-horizontal shadow'>
              <div className='stat'>
                <div className='stat-title'>Happy Customers</div>
                <div className='stat-value'>100%</div>
              </div>

              <div className='stat'>
                <div className='stat-title'>Luxury Cars</div>
                <div className='stat-value'>200+</div>
              </div>

              <div className='stat'>
                <div className='stat-title'>Kilometers Driven</div>
                <div className='stat-value'>50,000+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
