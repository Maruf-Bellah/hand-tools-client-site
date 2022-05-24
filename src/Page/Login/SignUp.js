import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Sheared/Loading';

const SignUp = () => {
     const navigate = useNavigate()
     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
     const { register, formState: { errors }, handleSubmit } = useForm();


     const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
     ] = useCreateUserWithEmailAndPassword(auth);

     const [updateProfile, updating, updateError] = useUpdateProfile(auth);

     const [token] = useToken(user || gUser)

     let signInError;

     if (token) {
          navigate('/')

     }


     if (loading || gLoading || updating) {
          return <Loading></Loading>
     }
     if (error || gError || updateError) {
          signInError = <p className='text-red-500 text-sm'>{error?.message || gError?.message}</p>
     }

     const onSubmit = async data => {

          await createUserWithEmailAndPassword(data.email, data.password)
          await updateProfile({ displayName: data.name });
          navigate('/purchage')


     };

     return (
          <div className='flex h-screen justify-center items-center'>
               <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                         <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                         <form onSubmit={handleSubmit(onSubmit)}>

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
                                             minLength: {
                                                  value: 5,
                                                  message: 'Must be 3 characters or longer'
                                             }

                                        })}
                                   />
                                   <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        {errors.name?.type === ' minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                   </label>
                              </div>

                              <div className="form-control w-full max-w-xs">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                             required: {
                                                  value: true,
                                                  message: 'Email is Required'
                                             },
                                             pattern: {
                                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                  message: 'Provide a valid Email'
                                             }
                                        })}
                                   />
                                   <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                   </label>
                              </div>
                              <div className="form-control w-full max-w-xs">
                                   <label className="label">
                                        <span className="label-text">Password</span>
                                   </label>
                                   <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                             required: {
                                                  value: true,
                                                  message: 'Password is Required'
                                             },
                                             minLength: {
                                                  value: 6,
                                                  message: 'Must be 6 characters or longer'
                                             }
                                        })}
                                   />
                                   <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                   </label>
                              </div>

                              {signInError}
                              <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Login" />
                         </form>
                         <p><small>Already have an account ?<Link className='text-secondary' to="/login"> Please Login</Link></small></p>
                         <div className="divider">OR</div>
                         <button
                              onClick={() => signInWithGoogle()}
                              className="btn btn-primary btn-outline"
                         >Continue with Google</button>
                    </div>
               </div>
          </div >
     );
};

export default SignUp;