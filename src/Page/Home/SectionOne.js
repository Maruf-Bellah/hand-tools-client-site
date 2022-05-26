import React from 'react';

const SectionOne = () => {
     return (
          <div className='lg:py-20'>
               <h1 className='text-4xl uppercase font-bold text-center'>You can read the following</h1>
               <h1 className='text-2xl uppercase pt-3 text-center'>articles to know about the website</h1>
               <div class="hero  lg:px-12 py-14">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                         <img src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332" alt='' class=" w-6/6 md:w-5/6 lg:w-3/6 rounded-lg shadow-2xl" />
                         <div className='w-6/6 md:w-5/6 lg:w-3/6 '>
                              <h1 class="text-5xl font-bold">Box Office News!</h1>
                              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              <button class="btn btn-primary ">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SectionOne;