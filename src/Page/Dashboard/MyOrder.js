
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {

     const [cards, setCards] = useState([]);
     const [user] = useAuthState(auth);
     const navigate = useNavigate()

     useEffect(() => {
          fetch(`http://localhost:5000/service?email=${user.email}`, {
               method: 'GET',
               headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
               }
          })
               .then(res => {

                    if (res.status === 401 || res.status === 403) {
                         navigate('/')
                    }
                    return res.json()
               })
               .then(data => {
                    setCards(data)
               });

     }, [])

     return (
          <div>
               <h1>this is my order {cards.length}</h1>
               <div class="overflow-x-auto">
                    <table class="table w-full">
                         {/* <!-- head --> */}
                         <thead>
                              <tr>
                                   <th></th>
                                   <th>Photo</th>
                                   <th>Name</th>
                                   <th>Price</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   cards.map(card => <MyOrderTable
                                        card={card}
                                   ></MyOrderTable>)
                              }
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default MyOrder;