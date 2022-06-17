import React from 'react';
import { BiStore } from "react-icons/bi";

import { IoLogoFacebook, IoLogoInstagram ,IoLogoMessanger, IoLogoPinterest, IoLogoYoutube} from "react-icons/io5";
import styled from './footer.module.css'
const Footer = () => {
    return <div style={{height:"1100px",width:"100%"}}>

        <div className={styled.footer} >

            <div>
                <img className={styled.img} src="https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png" alt="" />
                <h4>AFFORDABLE QUALITY</h4>
                <h4>FUN SHOOPING</h4>
            </div>
            <div ><BiStore style={{height:"10px",width:"40px",lineHeight:"10px"}}/ >
                <h4 className={styled.h}>High Quality Selection</h4>
                <p>Total product quality</p>
                <p>control for peace of mind</p>
            </div>
            <div>
                <h4 className={styled.h}>Affordable Prices</h4>
                <p>Factory direct prices for</p>
                <p>maximum savings</p>
            </div>
            <div>
                <h4 className={styled.h}>Express Shipping</h4>
                <p>Fast, reliable delivery from</p>
                <p>global warehouses</p>
            </div>
            <div>
                <h4 className={styled.h}>Worry-free After-sales</h4>
                <p>Instant access to</p>
                <p>professional support</p>
            </div>
        </div>
        <div className={styled.footer2nddiv} style={{height:"70px",display:'flex',gap:"20px",justifyContent:"space-between"}}>

            <div >
            <label htmlFor=""> <b> Newsletter </b></label>
            
            <input className={styled.inp} type="email" placeholder='Enter Email to get 50 Points' />
            <button className={styled.btnfooter}>Subscibe</button>

            </div>
            <div style={{display:"flex"}}>
            
            <div ><  IoLogoFacebook className={styled.iconHeight} /></div>
            <div><IoLogoYoutube  className={styled.iconHeight}/ ></div>
            <div><IoLogoInstagram  className={styled.iconHeight}/></div>
            <div><IoLogoPinterest  className={styled.iconHeight}/></div>
           

            </div>
        </div>


        <div className={styled.footer3nddiv} style={{display:"flex",height:"300px",justifyContent:"space-between"}}>
            <div>
                <h4>Company Information</h4>
                <p className={styled.p}>About Us</p>
                <p className={styled.p}>Top Searches</p>
                <p className={styled.p}>Privacy Policy</p>
                <p className={styled.p}>Terms and Conditions</p>
                <p className={styled.p}>Intellectual Property Policy</p>
                <p className={styled.p}>Testimonials</p>
                <p className={styled.p}>Contact Us</p>
                <p className={styled.p}>Report Security Issue</p>
                <p className={styled.p}>Sell on Gearbest</p>
                <p className={styled.p}>Cookies Policy</p>
                <p className={styled.p}>Top Brands</p>
                <p className={styled.p}>Gearbest Official Blog</p>
            </div>
            <div>
                <h4>Customer Service</h4>
                <p className={styled.p}>Shipping Information</p>
                <p className={styled.p}>My Favorites</p>
                <p className={styled.p}>FAQ For Newsletter Subscription</p>
                <p className={styled.p}>My Points</p>
                <p className={styled.p}>Warranty and Return</p>
                <p className={styled.p}>Payment Methods</p>
                <p className={styled.p}>Deposit Expansion</p>
                <p className={styled.p}>FAQ & Support</p>
                <p className={styled.p}>Sitemap</p>
                <p className={styled.p}>Gearbest Wallet Instruction</p>
                <p className={styled.p}>FAQs about COVID-19</p>
            </div>
            <div>
                <h4>Other Business</h4>
                <p className={styled.p}>Partnership Programs</p>
                <p className={styled.p}>Associate Program</p>
            </div>
            <div>
                <h4>Download App!</h4>
                <p>Save $3 with App & New User Only</p>
                </div>
        </div>

        <div className={styled.lastDivfooter} style={{height:"100px",display:"grid",gridTemplateColumns:"repeat(14,1fr)",gap:"10px",justifyContent:"center",textAlign:"center"}}>
            <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png" alt="" />
            </div>
            <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png" alt="" />
            </div>
            <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png" alt="" />
            </div>
            <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="" />
            </div>
            <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="" />
            </div>
            <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="" />
            </div>
            <div>
            <img className={styled.img}  src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ya.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/qiwi.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/webmoney.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png" alt="" />
            </div>
             <div  >
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/giropay.png" alt="" />
            </div>
             <div style={{width:"80%"}} >
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/eps.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/Visa-Logo.png" alt="" />
            </div>
             <div>
            <img className={styled.img} src="https://uidesign.gbtcdn.com/GB/image/others/20190222_7819/m-Logo.png" alt="" />
            </div>
        </div>
        <div style={{backgroundColor:"black",color:"white",textAlign:"center",height:"40px"}}>Copyright © 2014-2022 Gearbest.com. All Rights Reserved.</div>
    </div>;
}



export default Footer;