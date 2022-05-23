import React from 'react';

const Footer = () => {
     return (
          <div className=''>
               <footer className="footer p-10 bg-base-200 text-base-content ">
                    <div>
                         <span className="footer-title">Services</span>
                         <a className="link link-hover">Branding</a>
                         <a className="link link-hover">Design</a>
                         <a className="link link-hover">Marketing</a>
                         <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                         <span className="footer-title">Company</span>
                         <a className="link link-hover">About us</a>
                         <a className="link link-hover">Contact</a>
                         <a className="link link-hover">Jobs</a>
                         <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                         <span className="footer-title">Legal</span>
                         <a className="link link-hover">Terms of use</a>
                         <a className="link link-hover">Privacy policy</a>
                         <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                         <span className="footer-title">Newsletter</span>
                         <div className="form-control w-80">
                              <label className="label">
                                   <span className="label-text">Enter your email address</span>
                              </label>
                              <div className="relative">


                                   <div className="form-control">
                                        <div className="input-group">
                                             <input type="text" placeholder="Search…" className="input input-bordered" />
                                             <button className="btn btn-square">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
               {/* text-4xl font-bold text-center pb-5 */}
               {/* card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 */}
          </div>
     );
};

export default Footer;

