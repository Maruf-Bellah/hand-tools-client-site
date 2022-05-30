import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';

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

          fetch('https://gentle-anchorage-39185.herokuapp.com/profile', {
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

          fetch(`https://gentle-anchorage-39185.herokuapp.com/profile`, {
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


     const [user] = useAuthState(auth);

     return (
          <div>
               <h1>This is my profile page  </h1>

               <div>
                    <form onSubmit={handleSubmit}>

                         <div className='grid md:grid-cols-2 lg:grid-cols-2 rounded-lg gap-5 shadow-xl p-10'>
                              <div>
                                   <h1>Name</h1>
                                   <input type="text" name='name' placeholder={user?.displayName} disabled className="input input-bordered text-secondary input-warning w-full " />
                              </div>

                              <div>
                                   <h1>Email</h1>
                                   <input type="email" name='email' placeholder={user?.email} disabled className="input input-bordered input-warning w-full " />
                              </div>
                              <div>
                                   <h1>Phone No</h1>
                                   <input type="phone" name='phone' placeholder="Type here" className="input input-bordered input-warning w-full" />
                              </div>

                              <div>
                                   <h1>Education</h1>
                                   <input type="text" name='education' placeholder="Type here" className="input input-bordered input-warning w-full " />
                              </div>

                              <div>
                                   <h1>Location</h1>
                                   <input type="text" name='location' placeholder="Type here" className="input input-bordered input-warning w-full " />
                              </div>

                              <div>
                                   <h1>City Name</h1>
                                   <input type="text" name='city' placeholder="Type here" className="input input-bordered input-warning w-full " />
                              </div>

                              <input type='submit' value='add information' className='btn btn-primary text-center' />


                         </div>
                    </form>

               </div>

          </div>
     );
};

export default MyProfile;