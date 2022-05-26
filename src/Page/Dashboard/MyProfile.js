import React from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const MyProfile = () => {
     const { id } = useParams()

     const handleSubmit = event => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const phone = event.target.phone.value;
          const education = event.target.education.value;
          const location = event.target.location.value;
          const city = event.target.city.value;

          const result = { name, email, phone, education, location, city }
          console.log(result);

          fetch('http://localhost:5000/profile', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
               },
               body: JSON.stringify(result),
          })
               .then(res => res.json())
               .then(result => {

                    if (result.insertedId) {
                         toast.success('Your information added')
                    }
                    else {
                         toast.error('Please try again')
                    }
                    console.log(result);

               })
     }




     const handleUpdate = event => {
          event.preventDefault();
          const name = event.target.name.value;
          const email = event.target.email.value;
          const phone = event.target.phone.value;
          const education = event.target.education.value;
          const location = event.target.location.value;
          const city = event.target.city.value;

          const result = { name, email, phone, education, location, city }
          console.log(result);

          fetch(`http://localhost:5000/profile`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json',
               },
               body: JSON.stringify(result),
          })
               .then(res => res.json())
               .then(result => {

                    if (result.insertedId) {
                         toast.success('Your information Updated')
                    }
                    else {
                         toast.error('Please try again')
                    }
                    console.log(result);

               })

     }
     return (
          <div>
               <h1>This is my profile link</h1>
               <div className='grid gap-5 md:grid-cols-2'>
                    <div>
                         <form onSubmit={handleSubmit}>

                              <div className='grid md:grid-cols-1 lg:grid-cols-1 rounded-lg gap-5 shadow-xl p-9'>
                                   <div>
                                        <h1>Name</h1>
                                        <input type="text" name='name' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <div>
                                        <h1>Email</h1>
                                        <input type="email" name='email' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>
                                   <div>
                                        <h1>Phone No</h1>
                                        <input type="phone" name='phone' placeholder="Type here" class="input input-bordered input-warning w-full" />
                                   </div>

                                   <div>
                                        <h1>Education</h1>
                                        <input type="text" name='education' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <div>
                                        <h1>Location</h1>
                                        <input type="text" name='location' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <div>
                                        <h1>City Name</h1>
                                        <input type="text" name='city' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <button className='btn btn-primary'>Add Information</button>


                              </div>
                         </form>

                    </div>

                    <div>

                         <form onSubmit={handleUpdate} >

                              <div className='grid md:grid-cols-1 lg:grid-cols-1 rounded-lg gap-5 shadow-xl p-9'>
                                   <div>
                                        <h1>Name</h1>
                                        <input type="text" name='name' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <div>
                                        <h1>Email</h1>
                                        <input type="email" name='email' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>
                                   <div>
                                        <h1>Phone No</h1>
                                        <input type="phone" name='phone' placeholder="Type here" class="input input-bordered input-warning w-full" />
                                   </div>

                                   <div>
                                        <h1>Education</h1>
                                        <input type="text" name='education' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <div>
                                        <h1>Location</h1>
                                        <input type="text" name='location' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>

                                   <div>
                                        <h1>City Name</h1>
                                        <input type="text" name='city' placeholder="Type here" class="input input-bordered input-warning w-full " />
                                   </div>


                                   <button className='btn btn-primary'>Update Information</button>

                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default MyProfile;