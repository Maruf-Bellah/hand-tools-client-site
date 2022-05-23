import React from 'react';

const Banner = () => {
     return (
          <div className="hero py-20 lg:px-12 bg-base-000">
               <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://cdn.shopify.com/s/files/1/0377/2373/4148/files/slider12.jpg" className="w-6/6 md:w-6/6 lg:w-3/6 rounded-lg shadow-2xl" alt='' />
                    <div className='w-6/6 md:w-5/6 lg:w-3/6 '>
                         <h1 className="text-5xl font-bold">Box Office News!</h1>
                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         <button className="btn btn-primary">Get Started</button>
                    </div>
               </div>
          </div>
     );
};

export default Banner;



