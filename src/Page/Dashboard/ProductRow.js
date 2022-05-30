import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, index, setDeletingModal }) => {
     const { _id, name, img, price } = product;



     return (
          <tr>
               <th>{index + 1}</th>
               <td>
                    <div className="avatar">
                         <div className="w-8 rounded">
                              <img src={img} alt="Tailwind-CSS-Avatar-component" />
                         </div>
                    </div>
               </td>
               <td>{name}</td>
               <td>{price}</td>
               <td>
                    <label onClick={() => setDeletingModal(product)} for="delete-confirm-modal" className="btn btn-xs btn-error">delete</label>
               </td>
          </tr>
     );
};

export default ProductRow;