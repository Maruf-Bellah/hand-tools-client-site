import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ card }) => {
     const { name, img, description, price, minimum, available
     } = card;
     return (
          <div className=''>
               <div className="card  card-compact bg-base-100 shadow-xl">
                    <div>
                         <figure><img className='w-2/3 md:w-3/4 lg:w-4/6 ' src={img} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body ">
                         <h2 className="card-title">Product: {name}</h2>
                         <p>{description.slice(0, 300)}</p>
                         <h2 className=" font-bold">Price: ${price}</h2>
                         <h2 className=" font-bold">Minimum Order Quantity: ${minimum}</h2>
                         <h2 className=" font-bold">Available Order Quantity: ${available}
                         </h2>
                         <div className='flex justify-end items-center'>
                              {/*        <div className="btn-group card-actions">
                                   <button className="btn">«</button>
                                   <button className="btn">Page 22</button>
                                   <button className="btn">»</button>
                              </div> */}
                              <div className="card-actions justify-end">
                                   <Link to={`/purchage`}>
                                        <button className="btn btn-primary  font-bold">Order Now</button>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Services;