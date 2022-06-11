import React from 'react';
import Coupon from './Coupon';
import {Route,Routes} from 'react-router-dom'
import SuperDeal from './SuperDeal';
// import App from '../App';
import New from './New';
import AppOnly from './AppOnly';
import Home from './Home';
const AllRoute = () => {
    return <div>
     <Routes>
         <Route path='/' element={<Home />}/>
       <Route path='/coupon' element={<Coupon/>}/>
       <Route path='/super' element={<SuperDeal/>}/>
       <Route path='/app' element={<AppOnly/>} />
       <Route path='/new' element={<New/>} />
     </Routes>
    </div>;
}



export default AllRoute;
{/* <Link to='/coupon' >COUPON</Link>
<Link to='/super' >SUPER DEALS</Link>
<Link to='/app'>APP ONLY</Link>
<Link to='/new'>NEW ARRIVALS</Link> */}