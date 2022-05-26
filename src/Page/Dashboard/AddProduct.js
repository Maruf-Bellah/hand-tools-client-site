import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
     const { register, formState: { errors }, handleSubmit } = useForm();

     const imageStorageKey = '8ff8acee68a3516de4031684f7177911';

     const onSubmit = async data => {
          const image = data.image[0];
          const formData = new FormData();
          formData.append('image', image);
          const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
          fetch(url, {
               method: 'POST',
               body: formData
          })
               .then(res => res.json())
               .then(result => {
                    if (result.success) {
                         const img = result.data.url;
                         const addProduct = {
                              name: data.name,
                              price: data.price,
                              description: data.description,
                              img: img
                         }
                         //     send to your database 

                         fetch('https://gentle-anchorage-39185.herokuapp.com/product', {
                              method: 'POST',
                              headers: {
                                   'content-type': 'application/json'
                              },
                              body: JSON.stringify(addProduct)
                         })
                              .then(res => res.json())
                              .then(inserted => {
                                   if (inserted.insertedId) {
                                        toast.success('Wow your product added')
                                   }
                                   else {
                                        toast.error('Not add your product')
                                   }

                              })


                    }
               })

     };
     return (

          <div className='flex mt-12  justify-center items-center'>
               <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                         <h2 className="text-center text-2xl font-bold">Add Your Product</h2>
                         <form onSubmit={handleSubmit(onSubmit)}>

                              <div className="form-control w-full max-w-xs">
                                   <label className="label">
                                        <span className="label-text">Photo</span>
                                   </label>
                                   <input
                                        type="file"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("image", {
                                             required: {
                                                  value: true,
                                                  message: 'Photo is Required'
                                             },
                                        })}
                                   />
                                   <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image?.message}</span>}
                                   </label>
                              </div>

                              <div className="form-control w-full max-w-xs">
                                   <label className="label">
                                        <span className="label-text">Name</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                             required: {
                                                  value: true,
                                                  message: 'Name is Required'
                                             },
                                        })}
                                   />
                                   <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                   </label>
                              </div>

                              <div className="form-control w-full max-w-xs">
                                   <label className="label">
                                        <span className="label-text">Price</span>
                                   </label>
                                   <input
                                        type="text"
                                        placeholder="Price"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("price", {
                                             required: {
                                                  value: true,
                                                  message: 'Price is Required'
                                             },
                                        })}
                                   />
                                   <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price?.message}</span>}

                                   </label>
                              </div>
                              <div className="form-control w-full max-w-xs">
                                   <label className="label">
                                        <span className="label-text">Description</span>
                                   </label>
                                   <textarea
                                        type="text"
                                        placeholder="Description"
                                        className="textarea textarea-bordered w-full max-w-xs"
                                        {...register("description", {
                                             required: {
                                                  value: true,
                                                  message: 'Description is Required'
                                             }
                                        })}
                                   />
                                   <label className="label">
                                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description?.message}</span>}

                                   </label>
                              </div>


                              <input className='btn btn-primary  w-full max-w-xs text-white' type="submit" value="Login" />
                         </form>


                    </div>
               </div>
          </div >

     );
};

export default AddProduct;