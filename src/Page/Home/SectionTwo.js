import React from 'react';

const SectionTwo = () => {
     return (
          <div className=''>
               <div style={{
                    backgroundImage: `url(${'https://png.pngitem.com/pimgs/s/505-5057729_world-map-2d-hd-png-download.png'})`,
                    height: '70vh',
                    minHeight: '300px',
                    // filter: 'brightness(80%)'
               }} class="hero  bg-base-200">
                    <div class="hero-content w-full flex-col lg:flex-row-reverse">

                         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div class="card-body">
                                   <div class="form-control">

                                        <input type="text" placeholder="email" class="input input-bordered" />
                                   </div>
                                   <div class="form-control">

                                        <input type="text" placeholder="password" class="input input-bordered" />

                                   </div>
                                   <div class="form-control">

                                        <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>

                                   </div>
                                   <div class="form-control mt-6">
                                        <button class="btn btn-primary">Login</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SectionTwo;