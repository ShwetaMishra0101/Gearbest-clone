import React,{useState} from 'react';

import data from '../data/super.json'
import styled from '../style/super.module.css'
import { BsCart, BsSuitHeart, BsPerson } from "react-icons/bs";

import { BiStore } from "react-icons/bi";
const SuperDeal = () => {
  const [supers,setSupers] =useState(data)

    return <div className={styled.superMainDiv}>

        {supers && supers.map(({id,name,img,price,des})=>{
            
            return <div className={styled.super} key={id}>
                <img className={styled.img} src={img} alt="" />
                <p className={styled.name}>{name}</p>
                <p className={styled.price}>{price}</p>
                <p>{des}</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p><BiStore/> day Day Up Store</p>
                    <p> <BsCart className={styled.icone} /></p>
                </div>
            </div>
        })}

    </div>;
}


export default SuperDeal;