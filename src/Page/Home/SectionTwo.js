import React from 'react';

const SectionTwo = () => {
     return (
          <div className=''>
               <div style={{
                    backgroundImage: `url(${'https://png.pngitem.com/pimgs/s/505-5057729_world-map-2d-hd-png-download.png'})`,
                    height: '70vh',
                    minHeight: '300px',
                    // filter: 'brightness(80%)'
               }} className="hero  bg-base-200">
                    <div className="hero-content w-full flex-col lg:flex-row-reverse">

                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                   <div className="form-control">

                                        <input type="text" placeholder="email" className="input input-bordered" />
                                   </div>
                                   <div className="form-control">

                                        <input type="text" placeholder="password" className="input input-bordered" />

                                   </div>
                                   <div className="form-control">

                                        <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>

                                   </div>
                                   <div className="form-control mt-6">
                                        <button className="btn btn-primary font-bold">Login</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SectionTwo;