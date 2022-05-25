import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Sheared/Loading';
import ProductRow from './ProductRow';

const Payment = () => {
     const [payment, setPayment] = useState({})
     const { id, name } = useParams();
     const url = `http://localhost:5000/address/${id}`;


     useEffect(() => {
          fetch(url, {
               method: 'GET',
               headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
               }
          })
               .then(res => res.json())
               .then(data => {
                    setPayment(data)
                    console.log(data)
               });

     }, [])


     return (
          <div>
               <h1 className='text-sm  text-purple-800'>This is Payment{id}</h1>
               <div class="card w-3/5 bg-base-100 shadow-xl">
                    <div class="card-body">
                         <h2 class="card-title">Well come to {payment.name}</h2>
                         < p className=''> Your product name <span className='text-purple-500 font-bold'>{payment.product}</span> </p>
                         <p>Please Pay $<span className='text-purple-500 font-bold'> {payment.price}</span></p>

                    </div>
               </div>
               <div class="card mt-5 w-3/5 bg-base-100 shadow-xl">
                    <div class="card-body">
                         <h2 class="card-title">Card title!</h2>
                         <p>If a dog chews shoes whose shoes does he choose?</p>
                         <div class="card-actions justify-end">
                              <button class="btn btn-primary">Buy Now</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Payment;