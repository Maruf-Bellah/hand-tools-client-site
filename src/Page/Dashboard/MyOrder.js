
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteOrderModal from './DeleteOrderModal';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {

     const [cards, setCards] = useState([]);
     const [deleteOrder, setDeleteOrer] = useState(null)
     const [user] = useAuthState(auth);
     const navigate = useNavigate()

     useEffect(() => {
          fetch(`http://localhost:5000/address`, {
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
               <div className="overflow-x-auto">
                    <table className="table w-full">
                         {/* <!-- head --> */}
                         <thead>
                              <tr>
                                   <th>NO</th>
                                   <th>Customer Name</th>
                                   <th>Product Name</th>
                                   <th>City</th>
                                   <th>Chose</th>
                                   <th>Payment</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   cards.map((card, index) => <MyOrderTable
                                        card={card}
                                        index={index}
                                        setDeleteOrer={setDeleteOrer}
                                   ></MyOrderTable>)
                              }
                         </tbody>
                    </table>
               </div>
               {deleteOrder && <DeleteOrderModal

                    deleteOrder={deleteOrder}
                    setDeleteOrer={setDeleteOrer}
               ></DeleteOrderModal>}
          </div>
     );
};

export default MyOrder;