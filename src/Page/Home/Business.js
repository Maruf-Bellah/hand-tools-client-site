import React from 'react';

const Business = () => {
     return (
          <div className='lg:px-12 lg:py-20  px-3'>
               <h1 className='text-4xl font-bold text-center uppercase'>If you see our service here</h1>
               <h1 className='text-2xl py-3 text-center uppercase' > you will understand</h1>
               <div class="stats stats-vertical lg:stats-horizontal w-full ">

                    <div class="center text-center p-12 ">
                         <div class="stat-figure text-primary ">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-20 h-20 stroke-current"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                         </div>
                         <div class="stat-title font-bold">Happy Clients</div>
                         <div class="stat-value text-secondary">287+</div>
                         <div class="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div class="center text-center p-12">
                         <div class="stat-figure text-primary ">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-20 h-20 stroke-current"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                         </div>
                         <div class="stat-title font-bold">Our Services</div>
                         <div class="stat-value">72+</div>
                         <div class="stat-desc">Countries in the world</div>
                    </div>

                    <div class="center text-center p-12">
                         <div class="stat-figure text-primary ">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-20 h-20 stroke-current"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                         </div>
                         <div class="stat-title font-bold">Complete Project</div>
                         <div class="stat-value">543+</div>
                         <div class="stat-desc">↗︎ 400 (99%)</div>
                    </div>

                    <div class="center text-center p-12">
                         <div class="stat-figure text-primary ">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-20 h-20  stroke-current"><path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                         </div>
                         <div class="stat-title  font-bold">New Registers</div>
                         <div class="stat-value">1,200</div>
                         <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>
               </div>
               <div className='p-10 text-center lg:text-left stats  w-full stats-vertical lg:stats-horizontal items-center'>
                    <div className=''>
                         <h1 className='text-2xl font-bold uppercase lg:pr-36'>Have any question about us or get a products request?</h1>
                         <h2 className='text-2xl '>Don't hesitate to contact us</h2>
                    </div>
                    <div className='lg:pl-12'>
                         <button className='btn btn-secondary font-bold mr-3'>Request For Quote</button>
                         <button className='btn btn-primary font-bold mt-3'>Contact Us</button>
                    </div>
               </div>
          </div>
     );
};

export default Business;