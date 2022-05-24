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

          fetch('http://localhost:5000/address', {
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
               <div class="hero  ">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                         <div class="card flex-shrink-0 w-full max-w-sm bg-base-100 shadow-xl">
                              <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                              <div class="card-body">
                                   <h2 class="card-title">Shoes!</h2>
                                   <p>If a dog chews shoes whose shoes does he choose?</p>
                                   <div>
                                        <h1 className='text-5xl text-center'>{num}</h1>
                                   </div>

                                   <div class="card-actions justify-center">
                                        <button onClick={incNum} class="btn btn-primary">Increment</button>
                                        <button onClick={decNum} class="btn btn-primary">Decrement</button>
                                   </div>
                              </div>
                         </div>
                         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div class="card-body">
                                   <form onSubmit={handleSubmit}>
                                        <div class="form-control">
                                             <label class="label">
                                                  <span class="label-text">Name</span>
                                             </label>
                                             <input type="text" name='name' placeholder={user?.displayName} class="input input-bordered text-red-500" />
                                        </div>
                                        <div class="form-control">
                                             <label class="label">
                                                  <span class="label-text">Email</span>
                                             </label>
                                             <input type="email" name='email' placeholder={user.email} class="input input-bordered" />
                                        </div>
                                        <div class="form-control">
                                             <label class="label">
                                                  <span class="label-text">Mobile No</span>
                                             </label>
                                             <input type="text" name='mobile' placeholder="password" class="input input-bordered" />
                                             <label class="label">

                                             </label>
                                        </div>
                                        <div class="form-control">
                                             <label class="label">
                                                  <span class="label-text">City Name</span>
                                             </label>
                                             <input type="text" name='address' placeholder="password" class="input input-bordered" />
                                             <label class="label">

                                             </label>
                                        </div>
                                        <div class="form-control mt-6">
                                             <input type='submit' value='Submit' class="btn btn-primary"></input>
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