import React, { useEffect, useState } from 'react';
import MyOrderTable from './MyOrderTable';

const MyOrder = () => {

     const [cards, setCards] = useState([]);

     useEffect(() => {
          fetch('http://localhost:5000/service')
               .then(res => res.json())
               .then(data => setCards(data))
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