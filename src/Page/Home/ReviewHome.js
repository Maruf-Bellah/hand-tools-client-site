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
                         <div>
                              <div class="rating pt-3 rating-sm">
                                   <input type="radio" name="rating-9" class="rating-hidden" />
                                   <input type="radio" name="rating-9" class="mask mask-star-2" />
                                   <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                                   <input type="radio" name="rating-9" class="mask mask-star-2" />
                                   <input type="radio" name="rating-9" class="mask mask-star-2" />
                                   <input type="radio" name="rating-9" class="mask mask-star-2" />
                              </div>
                         </div>

                         <p className='text-justify'>{text.slice(0, 200)}</p>
                    </div>
               </div>
          </div>
     );
};

export default ReviewHome;