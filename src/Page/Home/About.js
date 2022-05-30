import React from 'react';
import img from './maruf.jpg'
import programer from './programer.png'
import car from './car.png'
import student from './student.png'
import { Link } from 'react-router-dom';

const About = () => {
     return (
          <div style={{
               'overflowX': 'hidden'
          }} className='lg:px-12 '>


               <div className=''>

                    <div className="hero  bg-base-00">
                         <div className="hero-content flex-col lg:flex-row-reverse">
                              <img src={img} className=" w-6/6 md:w-5/6 lg:w-3/6 rounded-lg shadow-2xl" alt='' />
                              <div className=' w-6/6 md:w-5/6 lg:w-6/6'>
                                   <h1 className="text-5xl font-bold ">Hi i am Maruf Bellah!</h1>
                                   <p className="py-6">I'm a beginner web developer, I want to learn a lot more, and I like to learn new things, now I am learning, I will learn more in the future, now whatever I can, <span className='text-secondary'>htm, css, boostrap, tailwint, js, react, node, mongo, firebase,</span> much more, that means I can do everything I need to be a web developer now</p>
                                   <h1 className='text-1xl font-bold '>mdmaruf5511507@gmail.com</h1>

                              </div>
                         </div>
                    </div>

               </div>
               <h1 className='text-2xl uppercase my-10 text-center font-bold p-6'>Made up of all the things mentioned above</h1>
               <div style={{
                    'overflowX': 'hidden'
               }} className='pb-20 lg:p-5 p-6  grid md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    <div  >
                         <div className="card glass ">
                              <figure><img src={programer} alt="car!" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">Program</h2>
                                   <p>Come and visit, this is my assignment's web site</p>

                                   <div className="card-actions justify-end">

                                        <button className="btn btn-primary">
                                             <a href='https://scintillating-tiramisu-f8ae90.netlify.app/' target='_blank' className="link link-hover">This is Website Link</a>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div>
                         <div className="card glass">
                              <figure><img src={car} alt="car!" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">CarWeb</h2>
                                   <p>Come and visit, this is my assignment's web site</p>

                                   <div className="card-actions justify-end">

                                        <button className="btn btn-primary">
                                             <a href='https://carweb-b913e.web.app/' target='_blank' className="link link-hover">This is Website Link</a>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div>
                         <div className="card  glass">
                              <figure><img src={student} alt="car!" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">Tutor</h2>
                                   <p>Come and visit, this is my assignment's web site</p>

                                   <div className="card-actions justify-end">

                                        <button className="btn btn-primary">
                                             <a href='https://assainment-3fdcb.web.app/' target='_blank' className="link link-hover">This is Website Link</a>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default About;