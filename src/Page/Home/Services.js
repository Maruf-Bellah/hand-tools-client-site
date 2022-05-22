import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ card }) => {
     const { name, img, description, price } = card;
     return (
          <div className=''>
               <div className="card card-compact bg-base-100 shadow-xl">
                    <div>
                         <figure><img className='w-2/3 md:w-3/4 lg:w-3/4' src={img} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body ">
                         <h2 className="card-title">{name}</h2>
                         <p>{description.slice(0, 74)}</p>
                         <h2 className="card-title">Price: ${price}</h2>
                         <div className='flex justify-end items-center'>
                              {/*        <div class="btn-group card-actions">
                                   <button class="btn">«</button>
                                   <button class="btn">Page 22</button>
                                   <button class="btn">»</button>
                              </div> */}
                              <div className="card-actions justify-end">
                                   <Link to='/purchage'>
                                        <button className="btn btn-primary">Buy Now</button>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Services;