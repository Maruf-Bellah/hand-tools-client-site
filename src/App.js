
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Page/Dashboard/AddReview';
import Dashboard from './Page/Dashboard/Dashboard';
import MyOrder from './Page/Dashboard/MyOrder';
import MyProfile from './Page/Dashboard/MyProfile';
import Users from './Page/Dashboard/Users';
import About from './Page/Home/About';
import Blog from './Page/Home/Blog';
import Home from './Page/Home/Home';
import Purchage from './Page/Home/Purchage';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/RequireAuth';
import SignUp from './Page/Login/SignUp';
import Navbar from './Page/Sheared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/purchage' element={
          <RequireAuth>
            <Purchage></Purchage>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>

        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
