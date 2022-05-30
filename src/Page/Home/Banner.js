import React from 'react';
import img from './slider12.webp'

const Banner = () => {
     return (
          <div style={{
               backgroundImage: `url(${img})`,
               height: '70vh',
               minHeight: '400px',
               filter: 'brightness(80%)'
          }} className="hero hero-overlay bg-opacity-100 py-20 lg:px-12 bg-base-000" >
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="" className="w-6/6 md:w-6/6 lg:w-3/6 rounded-lg shadow-2xl" alt='' />
                    <div className=' w-6/6 md:w-5/6 lg:w-3/6 '>
                         <h1 className="text-4xl lg:text-5xl font-bold uppercase ">Well come to our <span className='text-primary '>hands tools</span> website!</h1>
                         <p className="py-6 sm:block hidden ">There's more to life than just doing the little things in your house, and all of these things are worth it, so if you're looking for something like that, you're in the right place.</p>
                         <button className="btn mt-3 btn-primary font-bold">Get Started</button>
                    </div>
               </div>
          </div >
     );
};

export default Banner;



