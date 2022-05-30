import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

const AddReview = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();

     const onSubmit = async data => {
          const result = data;

          fetch('https://gentle-anchorage-39185.herokuapp.com/review', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json',
               },
               body: JSON.stringify(result),
          })
               .then(res => res.json())
               .then(result => {

                    if (result.insertedId) {
                         toast.success('Your Address Submited')
                    }
                    else {
                         toast.error('Please try again')
                    }
                    console.log(result);

               })



     };


     return (
          <div>

               <div className='flex  justify-center items-center'>
                    <div className="card w-full bg-base-100 shadow-xl">
                         <div className="card-body">
                              <h2 className="text-center uppercase text-2xl font-bold">well come review page</h2>
                              <div className='grid md:grid-cols-2 justify-center items-center'>
                                   <div >
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                             <div className="form-control w-full max-w-xs">
                                                  <label className="label">
                                                       <span className="label-text font-bold text-xl">Comment</span>
                                                  </label>
                                                  <textarea
                                                       type="text"
                                                       placeholder="write here"
                                                       className="input h-44 input-bordered w-full  max-w-xs"
                                                       {...register("text", {
                                                            required: {
                                                                 value: true,
                                                                 message: 'Text is Required'
                                                            },
                                                            maxLength: {
                                                                 value: 250,
                                                                 message: 'Must be 250 characters or longer'
                                                            }
                                                       })}
                                                  />
                                                  <label className="label">
                                                       {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                                                       {errors.text?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                                                  </label>
                                             </div>


                                             <input className='btn btn-primary  w-full max-w-xs text-white' type="submit" value="Comment" />
                                        </form>
                                   </div>
                                   <div>
                                        <img src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" alt="" />
                                   </div>
                              </div>

                         </div>
                    </div>
               </div >
          </div>
     );
};

export default AddReview;