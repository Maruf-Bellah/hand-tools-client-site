import React from 'react';

const Banner = () => {
     return (
          <div class="hero lg:px-12 bg-base-000">
               <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://png.pngtree.com/png-clipart/20210312/original/pngtree-flat-professional-car-mechanic-png-image_6072520.jpg" class="w-5/5 md:w-4/5 lg:w-2/5 rounded-lg shadow-2xl" alt='' />
                    <div className='w-5/5 md:w-4/5 lg:w-4/5'>
                         <h1 class="text-5xl font-bold">Box Office News!</h1>
                         <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                         <button class="btn btn-primary">Get Started</button>
                    </div>
               </div>
          </div>
     );
};

export default Banner;



