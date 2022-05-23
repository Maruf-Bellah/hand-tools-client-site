import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
     return (
          <div class="drawer drawer-mobile">
               <input id="dashboard-side" type="checkbox" class="drawer-toggle" />
               <div class="drawer-content ">
                    <h1 className='text-red-500 text-center font-bold'>Well Come to Your Dashboard </h1>
                    <Outlet></Outlet>
                    {/* <!-- Page content here --> */}


               </div>
               <div class="drawer-side">
                    <label for="dashboard-side" class="drawer-overlay"></label>
                    <ul class="menu  p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                         {/* <!-- Sidebar content here --> */}
                         <li className='mb-2'><NavLink to='/dashboard'>My Profile</NavLink></li>
                         <li className='mb-2'><NavLink to='/dashboard/myOrder'>My Order</NavLink></li>
                         <li className='mb-2'><NavLink to='/dashboard/addReview'>Add a Review</NavLink></li>
                         <li className='mb-2'><NavLink to='/dashboard/users'>All Users</NavLink></li>

                    </ul>

               </div>
          </div>
     );
};

export default Dashboard;