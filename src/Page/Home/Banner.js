import React from 'react';
import img from './slider12.webp'

const Banner = () => {
     return (
          <div style={{
               backgroundImage: `url(${img})`,
               height: '70vh',
               minHeight: '300px',
               filter: 'brightness(70%)'
          }} className="hero hero-overlay bg-opacity-100 py-20 lg:px-12 bg-base-000" >
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="" className="w-6/6 md:w-6/6 lg:w-3/6 rounded-lg shadow-2xl" alt='' />
                    <div className='sm:block hidden w-6/6 md:w-5/6 lg:w-3/6 '>
                         <h1 className="text-6xl font-bold ">Well come to our <span className='text-primary '>hands tools</span> website!</h1>
                         <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         <button className="btn btn-primary font-bold">Get Started</button>
                    </div>
               </div>
          </div >
     );
};

export default Banner;



