import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, setDeletingModal }) => {
     const { _id, name, img, price } = product;



     return (
          <tr>
               <th>{index + 1}</th>
               <td>
                    <div class="avatar">
                         <div class="w-8 rounded">
                              <img src={img} alt="Tailwind-CSS-Avatar-component" />
                         </div>
                    </div>
               </td>
               <td>{name}</td>
               <td>{price}</td>
               <td>
                    <label onClick={() => setDeletingModal(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">open modal</label>
               </td>
          </tr>
     );
};

export default ProductRow;