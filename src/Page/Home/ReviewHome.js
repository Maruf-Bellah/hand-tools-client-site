import React from 'react';

const ReviewHome = ({ review }) => {
     const { text } = review;
     return (
          <div>
               <div class="card  bg-base-100 shadow-xl">
                    <div class="card-body justify-center">
                         <div class="avatar">
                              <div class="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                              </div>
                         </div>
                         <h2 class="card-title text-justify">Your Review!</h2>
                         <p className='text-justify'>{text.slice(0, 200)}</p>
                    </div>
               </div>
          </div>
     );
};

export default ReviewHome;