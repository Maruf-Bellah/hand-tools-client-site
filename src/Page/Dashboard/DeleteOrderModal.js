import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({ deleteOrder, setDeleteOrer }) => {
     const { name, _id } = deleteOrder;

     // const { name, _id } = deletingModal



     const handleDelete = _id => {
          fetch(`https://gentle-anchorage-39185.herokuapp.com/address/${_id}`, {
               method: 'DELETE',
               headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
               }
          })
               .then(res => res.json())
               .then(data => {

                    if (data.deletedCount) {
                         toast.success(`Product: is deleted.`);
                         setDeleteOrer(null)
                         // setDeletingModal(null)
                    }
               })


     }
     return (
          <div>




               <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
               <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                         <h3 className="font-bold text-lg">Hey <span className='text-primary '>{name}</span> Are you sure for deleting !</h3>
                         <p className="py-4">Once you delete it, but you won't get it anymore</p>
                         <div className="modal-action">
                              <button onClick={() => handleDelete(_id)} className="btn btn-xs btn-error">Delete</button>
                              <label for="delete-order-modal" className="btn btn-xs btn-primary ">Cancel</label>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default DeleteOrderModal;