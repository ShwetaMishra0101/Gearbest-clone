import React,{useState} from 'react';
import home from '../home.json'
// import data from '../data'
import styled from './home.module.css'
import { RiMoneyDollarBoxFill } from "react-icons/ri";

import fristdata from '../data/homefirst.json'

import { MdThumbUpOffAlt } from "react-icons/md"; 
import { Link } from 'react-router-dom';

import col from '../data/HomeCol.json'

import supers from '../data/homeSuper.json'
const Home = () => {

const [data,setdata] = useState(home)
const [first,setFirst] = useState(fristdata);
const [collectin,setCollection] = useState(col)
const [superdata,setSuperData] = useState(supers)
  return <div>

    <div className={styled.slider1}>

      <div className={styled.slidFirstDiv}>

        <p  className={styled.p}>Consumer Electronics</p>

        <p className={styled.p}>Industrial & Scientific</p>
        <p className={styled.p}>Cell Phone & Accessories</p>
        <p className={styled.p}>Appliances</p>
        <p className={styled.p}>Outdoors, Fitness & Sports</p>
        <p className={styled.p}>Computers, Tablets & Office</p>
        <p className={styled.p}>Health & Personal Care</p>
        <p className={styled.p}>Home Improvement & Tools</p>
        <p className={styled.p}>Drones, Toys & Hobbies</p>
        <p className={styled.p}>Home & Garden</p>
        <p className={styled.p}>Motor & Car Electronics</p>
        <p className={styled.p}>Men's Fashion</p>
        <p className={styled.p}>Watches & Jewelry</p>
        <p className={styled.p}>Gearbest Promotion</p>
      </div>
      <div>d</div>
    </div>

    <div className={styled.frstDivfooter}>
      <div className={styled.frstDivfooterfrst}>Multilingual <br/> Support Team </div>

      <div className={styled.frstDivfooterSecond}>

     {first && first.map(({img,id})=>{
       return <div className={styled.secondDiv} key={id}>
         <img src={img} alt="" />
       </div>
     })}
      
      </div>
      
      </div>


      {/* collection */}

      <div> COLLECTION </div>

      <div className={styled.colmainDiv}>
        
      {/* <Link to="/col" > */}
        
        <div className={styled.colFirstDiv}>

        </div>
        {/* </Link> */}

        <div className={styled.colSecondDiv}> </div>

{collectin&&collectin.map(({id,img,price,name})=>{
  return <div className={styled.colSecindDivchild}>
   <img className={styled.colimg} src={img} alt="" />

   <p>{name}</p>
  </div>

})}
       

      </div>

    {/* supper deal */}

    <div>SUPER DEALS</div>

    <div className={styled.superMain}>
      <div className={styled.firstDiv}>sd</div>
      
      <div className={styled.secondDivsuper}>
        {superdata&&superdata.map(({img,name,price,id,dis})=>{
          return <div key={id} className={styled.superChild}>
            <img className={styled.superimg} src={img} alt="" />
            <p className={styled.name}>{name}</p>
            <p>{dis}</p>
            <p className={styled.price}>{price}</p>
          </div>
        })}
      </div>
    </div>

 

    <div className={styled.h3}> <RiMoneyDollarBoxFill className={styled.icone}/><b className={styled.icones}>SUPER DEALS</b></div>


{/* recommended  */}
  
  <div className={styled.h3} ><MdThumbUpOffAlt className={styled.icone}/> <b className={styled.icones}>RECOMMENDED FOR YOU</b></div>

  <div  className={styled.homeMainDiv} >

   {data && data.map(({id,name,img,Price})=>{
     return <div className={styled.recommended} key={id}>
       {/* <p>{id}</p> */}
       {/* <div> */}
       <img className={styled.img} src={img} alt="" />
       {/* </div> */}
       {/* <div> */}
       <p className={styled.name}>{name}</p>
       <h3 className={styled.price}>{Price}</h3>
       <Link to={`/${id}`}>num</Link>
       {/* </div> */}
     </div>
   })}
    </div>

    <div className={styled.pop}>

      

    </div>
  </div>

}



export default Home;