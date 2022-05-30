import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTable = ({ card, index, setDeleteOrer }) => {
     const { _id, name, price, product, address, paid } = card;
     return (
          <tr>
               <th>{index + 1}</th>
               <td>{name}</td>
               <td>{product}</td>
               <td>{address}</td>
               <td>


                    <label onClick={() => setDeleteOrer(card)} for="delete-order-modal" className="btn btn-xs btn-error">delete</label>

               </td>
               <td>

                    {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}



                    {(price && paid) && <span className=' text-success'>Pay</span>}

               </td>



          </tr>
     );
};

export default MyOrderTable;