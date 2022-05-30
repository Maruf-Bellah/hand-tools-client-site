import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L11fvB2zxg55EDckPdlIChIAZyhHP02SHmIwcITwMAAzVlpRdfmVzJgtvMyekBzmEzd39rkdlFScpxNrRDlfuvr00QSzdRdAu');

const Payment = () => {
     const [payment, setPayment] = useState({})
     const { id } = useParams();
     const url = `https://gentle-anchorage-39185.herokuapp.com/address/${id}`;


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
               <div className="card w-3/5 bg-base-100 shadow-xl">
                    <div className="card-body">
                         <h2 className="card-title">Well come to {payment.name}</h2>
                         < p className=''> Your product name <span className='text-purple-500 font-bold'>{payment.product}</span> </p>
                         <p>Please Pay $<span className='text-purple-500 font-bold'> {payment.price}</span></p>

                    </div>
               </div>
               <div className="card mt-5 w-3/5 bg-base-100 shadow-xl">
                    <div className="card-body">
                         <Elements stripe={stripePromise}>
                              <CheckoutForm payment={payment} />
                         </Elements>

                    </div>
               </div>
          </div>

     );
};

export default Payment;