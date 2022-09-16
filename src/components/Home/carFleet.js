const CarFleet = () => {
  return (
    <>
      {/* Our Car Fleet */}
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col-reverse lg:flex-row'>
          <div className='carousel w-full'>
            <div
              id='slide1'
              className='carousel-item relative w-full justify-center'
            >
              <img
                src={`${require('../../assets/images/fleet_1.png')}`}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide4' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide2' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='slide2' className='carousel-item relative w-full'>
              <img
                src={`${require('../../assets/images/fleet_1.png')}`}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide1' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide3' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='slide3' className='carousel-item relative w-full'>
              <img
                src={`${require('../../assets/images/fleet_2.png')}`}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide2' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide4' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='slide4' className='carousel-item relative w-full'>
              <img
                src={`${require('../../assets/images/fleet_3.png')}`}
                className='w-full'
              />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#slide3' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide1' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Our Car Fleet!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarFleet;
