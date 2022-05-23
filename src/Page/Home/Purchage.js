import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchage = () => {
     const [user, loading, error] = useAuthState(auth);

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
               })

     }
     return (
          <div>
               <div class="hero min-h-screen ">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                         <div class="card flex-shrink-0 w-full max-w-sm bg-base-100 shadow-xl">
                              <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                              <div class="card-body">
                                   <h2 class="card-title">Shoes!</h2>
                                   <p>If a dog chews shoes whose shoes does he choose?</p>
                                   <div class="card-actions justify-end">
                                        <button class="btn btn-primary">Buy Now</button>
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
          </div >
     );
};

export default Purchage;