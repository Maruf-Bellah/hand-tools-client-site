import React, { useEffect, useState } from 'react';
import useQuery from 'use-query';
import Loading from '../Sheared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {
     const [products, setProducts] = useState([]);
     const [deletingModal, setDeletingModal] = useState(null)

     useEffect(() => {
          fetch('http://localhost:5000/product', {
               method: 'GET',
               headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
               }
          })
               .then(res => res.json())
               .then(data => {
                    return setProducts(data)
               })
     }, [])

     return (
          <div>
               <h1>Manage Product {products.length}</h1>
               <div class="overflow-x-auto">
                    <table class="table w-full">

                         <thead>
                              <tr>
                                   <th>No</th>
                                   <th>Image</th>
                                   <th>Name</th>
                                   <th>Price</th>
                                   <th>Choose</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   products.map((product, index) => <ProductRow
                                        key={product._id}
                                        product={product}
                                        index={index}
                                        setDeletingModal={setDeletingModal}
                                   ></ProductRow>)
                              }



                         </tbody>
                    </table>
               </div>
               {deletingModal && <DeleteConfirmModal
                    deletingModal={deletingModal}
                    setDeletingModal={setDeletingModal}
               ></DeleteConfirmModal>}
          </div>
     );
};

export default ManageProduct;