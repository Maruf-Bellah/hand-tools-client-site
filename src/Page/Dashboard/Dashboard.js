
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
     const [user] = useAuthState(auth);
     const [admin] = useAdmin(user)

     return (
          <div className="px-12 drawer drawer-mobile">
               <input id="dashboard-side" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content ">
                    <h1 className='text-secondary text-xl text-center font-bold'>Well Come to Your Dashboard </h1>
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


               </div>
               <div className="drawer-side">
                    <label htmlFor="dashboard-side" className="drawer-overlay"></label>
                    <ul className="menu font-bold p-4 overflow-y-auto w-80  text-base-content">
                         {/* <!-- Sidebar content here --> */}
                         <li className='mb-2'><Link to='/dashboard'>My Profile</Link></li>
                         <li className='mb-2'><Link to='/dashboard/addProduct'>Add Product</Link></li>
                         {/* <li className='mb-2'><Link to='/dashboard/updateAddress'>Update Address</Link></li> */}
                         {/* <li className='mb-2'><Link to='/dashboard/payment'>Payment Here</Link></li> */}






                         {!admin && <>
                              <li className='mb-2'><Link to='/dashboard/myOrder'>My Order</Link></li>
                              <li className='mb-2'><Link to='/dashboard/addReview'>Add Review</Link></li>
                         </>}

                         {admin && <>
                              <li className='mb-2'><Link to='/dashboard/users'>Make Admin</Link></li>
                              <li className='mb-2'><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                         </>}

                    </ul>

               </div>
          </div>
     );
};

export default Dashboard;