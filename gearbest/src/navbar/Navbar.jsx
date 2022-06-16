import React from 'react';
import styled from './navbar.module.css'

import {Link} from 'react-router-dom'

import { BsCart,BsSuitHeart,BsPerson } from "react-icons/bs";
const Navbar = () => {
    
    return <div>


        <div className={styled.nav}>
            <div></div>
            <div className={styled.navFirst}>

                <div >
                <select name="" id="">
                    <option value="">Save$3 with app</option>
                    <option value="">num</option>
                </select>
                </div>

                <div>Support center</div>
                <div>
                  
                <select name="" id="">
                    <option value="">ship to /USD</option>
                    <option value="">num</option>
                </select>
                </div>
                <div>
                <select name="" id="">
                    <option value="">Language</option>
                    <option value="">Hindi</option>
                    <option value="">English</option>
                    <option value="">Nepali</option>
                    <option value="">Bangali</option>
                    <option value="">Gujarati</option>
                    <option value="">Leo</option>
                    <option value="">Posto</option>
                    <option value="">Lgbo</option>
                    <option value="">Maori</option>
                    <option value="">Danish</option>
                    <option value="">Greek</option>
                    <option value="">Khmer</option>
                   

                </select>
                </div>
                <div>
                <select name="" id="">
                    <option value="">Country Website </option>
                    <option value="">Global(English)</option>
                    <option value="">France</option>
                    <option value="">Espana</option>
                    <option value="">Pocconr</option>
                    <option value="">Portugal</option>
                    <option value="">Ltalia</option>
                    <option value="">Deustschland</option>
                    <option value="">Brasil</option>
                    <option value="">Turkiye</option>
                    <option value="">Polska</option>
                    <option value="">Japan</option>
                </select>
                </div>
                
       </div>

        </div>
            <div className={styled.nav1}>

                <div>
                    <Link to="/" ><img style={{height:"50px"}} src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" alt="" /></Link></div>
                <div>
                    <input type="text" name="" id="" placeholder='enter' className={styled.inp} >
                    
                    </input>
                </div>
                <div className={styled.nav2}>

<Link to="/login">
                    <div className={styled.iDiv}><BsPerson className={styled.icone}  / ><div>Sign in</div></div>

                    </Link>

                    <div className={styled.iDiv}><BsSuitHeart className={styled.icone}/><div>Favorites</div></div>
                    <div className={styled.iDiv}><BsCart className={styled.icone}/ ><div>Cart</div></div>
                </div>
                
            </div>

            <div className={styled.navbardiv}>

             <div className={styled.catg}>Category</div>
            <div >
                <Link to='/coupon' >COUPON</Link>
           
                </div>
                <div >
                <Link to='/super' >SUPER DEALS</Link>
                </div>
                <div >
                <Link to='/app'>APP ONLY</Link>
                </div>
                <div >
                <Link to='/new'>NEW ARRIVALS</Link>
                </div>

            </div>

            <div>
               
            </div>

    </div>;
}


export default Navbar;
