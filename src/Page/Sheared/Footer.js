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


                                   <div class="form-control">
                                        <div class="input-group">
                                             <input type="text" placeholder="Search…" class="input input-bordered" />
                                             <button class="btn btn-square">
                                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;