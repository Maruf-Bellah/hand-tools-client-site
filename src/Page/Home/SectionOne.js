import React from 'react';

const SectionOne = () => {
     return (
          <div className='lg:py-20 lg:px-10 py-12 p-4'>
               <h1 className='text-3xl lg:text-4xl uppercase font-bold text-center'>You can read the following</h1>
               <h1 className='text-2xl uppercase pt-3 text-center'>articles to know about the website</h1>
               <div className="hero  py-14">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <img src="https://images.unsplash.com/photo-1513467655676-561b7d489a88?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332" alt='' className=" w-6/6 md:w-5/6 lg:w-3/6 rounded-lg shadow-2xl" />
                         <div className='w-6/6 md:w-5/6 lg:w-3/6 '>
                              <h1 className="text-3xl mt-3 lg:text-5xl font-bold">About Our Website !</h1>
                              <p className="py-6">Here you can do the big things from the little things in your house, and all these things are for everyone, so if you are looking for something like this, you are coming to the right place, our things are good for many days, so a little more expensive. If you buy things, I think you can use it for many days, so try to buy a product without delay</p>
                              <button className="btn btn-primary font-bold ">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SectionOne;