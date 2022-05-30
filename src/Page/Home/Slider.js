import React, { useEffect, useState } from 'react';
import ReviewHome from './ReviewHome';

const Slider = () => {
     const [reviews, setReviews] = useState([]);

     useEffect(() => {
          fetch('https://gentle-anchorage-39185.herokuapp.com/review')
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [])
     return (
          <div className='pb-20 lg:px-12 py-12 p-6'>
               <h1 className='text-3xl lg:text-4xl uppercase font-bold text-center'>This is your review</h1>
               <h2 className='text-2xl uppercase py-3 text-center'>If you want you can read it again</h2>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                         reviews.map(review => <ReviewHome
                              review={review}
                         ></ReviewHome>).slice(0, 6)
                    }
               </div>

          </div>
     );
};

export default Slider;