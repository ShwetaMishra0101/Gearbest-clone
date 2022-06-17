import React from 'react';
import Coupon from './Coupon';
import {Route,Routes} from 'react-router-dom'
import SuperDeal from './SuperDeal';
// import App from '../App';
import New from './New';
import AppOnly from './AppOnly';
import Home from './Home';
import HomeUser from './HomeUser';
import Login from './Login';
import Cart from './Cart';
import CheckedOut from './CheckedOut';
const AllRoute = () => {
    return <div>
     <Routes>
         <Route path='login' element={<Login />}/>
         <Route path='/' element={<Home />}/>
        <Route path='/:id' element={<HomeUser/>}/>
       <Route path='/coupon' element={<Coupon/>}/>
       <Route path='/super' element={<SuperDeal/>}/>
       <Route path='/app' element={<AppOnly/>} />
       <Route path='/new' element={<New/>} />
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/check' element={<CheckedOut/>}/>
       {/* <Route path='/col' element={<AppOnly/>}/> */}
     </Routes>
    </div>;
}



export default AllRoute;
{/* <Link to='/coupon' >COUPON</Link>
<Link to='/super' >SUPER DEALS</Link>
<Link to='/app'>APP ONLY</Link>
<Link to='/new'>NEW ARRIVALS</Link> */}