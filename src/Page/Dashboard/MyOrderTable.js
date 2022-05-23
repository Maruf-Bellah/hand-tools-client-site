import React from 'react';

const MyOrderTable = ({ card }) => {
     const { img, name, price } = card;
     return (
          <tr>
               <th>1</th>
               <td>
                    <div class="avatar">
                         <div class="w-12 rounded">
                              <img src={img} alt='' />
                         </div>
                    </div>
               </td>
               <td>{name}</td>
               <td>Price {price}</td>
          </tr>
     );
};

export default MyOrderTable;