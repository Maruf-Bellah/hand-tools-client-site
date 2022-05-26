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
               <h1>This is review</h1>
               <div className='flex  justify-center items-center'>
                    <div className="card w-full bg-base-100 shadow-xl">
                         <div className="card-body">
                              <h2 className="text-center text-2xl font-bold">Feadback here</h2>
                              <div className='grid md:grid-cols-2 justify-center items-center'>
                                   <div >
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                             <div className="form-control w-full max-w-xs">
                                                  <label className="label">
                                                       <span className="label-text">Comment</span>
                                                  </label>
                                                  <textarea
                                                       type="text"
                                                       placeholder="write here"
                                                       className="input h-40 input-bordered w-full  max-w-xs"
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
                                        <h1>img here</h1>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div >
          </div>
     );
};

export default AddReview;