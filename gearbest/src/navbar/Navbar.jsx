import React from 'react';
import styled from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return <div>

        <div className={styled.nav}>
            <div></div>
            <div>wsd</div>

        </div>
            <div className={styled.nav1}>

                <div>
                    <Link to="/" ><img style={{height:"50px"}} src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" alt="" /></Link></div>
                <div>
                    <input type="text" name="" id="" placeholder='enter' className={styled.inp} />
                </div>
                <div className={styled.nav2}>
                    <div>mk</div>
                    <div>l</div>
                    <div>l</div>
                </div>
                
            </div>

            <div className={styled.navbardiv}>

             <div>gsg</div>
            
                <Link to='/coupon' >COUPON</Link>
                <Link to='/super' >SUPER DEALS</Link>
                <Link to='/app'>APP ONLY</Link>
                <Link to='/new'>NEW ARRIVALS</Link>

            </div>

    </div>;
}


export default Navbar;
