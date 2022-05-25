import React from 'react';

const MyOrderTable = ({ card, index, setDeleteOrer }) => {
     const { name, price, product, address } = card;
     return (
          <tr>
               <th>{index + 1}</th>
               <td>{name}</td>
               <td>{product}</td>
               <td>{price}</td>
               <td>{address}</td>
               <td>


                    <label onClick={() => setDeleteOrer(card)} for="delete-order-modal" class="btn btn-xs btn-error">open modal</label>

               </td>
          </tr>
     );
};

export default MyOrderTable;