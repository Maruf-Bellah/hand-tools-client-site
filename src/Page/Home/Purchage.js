import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';

import auth from '../../firebase.init';


const Purchage = () => {
     const [user] = useAuthState(auth);
     const [num, setNum] = useState(5);

     const incNum = () => {
          setNum(num - 1)
     }
     const decNum = () => {
          setNum(num + 1)
     }

     const handleSubmit = event => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const mobile = event.target.mobile.value;
          const address = event.target.address.value;

          const result = { name, email, mobile, address }

          fetch('https://gentle-anchorage-39185.herokuapp.com/address', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
               },
               body: JSON.stringify(result),
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    toast.success('Your Address Submited')
               })

     }
     return (
          <div>
               <h1 className='text-4xl mt-10 text-center'>Hi <span className='text-primary'>{user?.displayName}</span> Submit Your Address</h1>
               <div className="hero  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 shadow-xl">
                              <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">Shoes!</h2>
                                   <p>If a dog chews shoes whose shoes does he choose?</p>
                                   <div>
                                        <h1 className='text-5xl text-center'>{num}</h1>
                                   </div>

                                   <div className="card-actions justify-center">
                                        <button onClick={incNum} className="btn btn-primary">Increment</button>
                                        <button onClick={decNum} className="btn btn-primary">Decrement</button>
                                   </div>
                              </div>
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                   <form onSubmit={handleSubmit}>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Name</span>
                                             </label>
                                             <input type="text" name='name' placeholder={user?.displayName} className="input input-bordered text-red-500" />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="email" name='email' placeholder={user.email} className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Mobile No</span>
                                             </label>
                                             <input type="text" name='mobile' placeholder="password" className="input input-bordered" />
                                             <label className="label">

                                             </label>
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">City Name</span>
                                             </label>
                                             <input type="text" name='address' placeholder="password" className="input input-bordered" />
                                             <label className="label">

                                             </label>
                                        </div>
                                        <div className="form-control mt-6">
                                             <input type='submit' value='Submit' className="btn btn-primary"></input>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
               <ToastContainer></ToastContainer>
          </div >
     );
};

export default Purchage;