import React,{useState} from 'react';

import data from '../data/super.json'
import styled from '../style/super.module.css'

const SuperDeal = () => {
  const [supers,setSupers] =useState(data)

    return <div className={styled.superMainDiv}>

        {supers && supers.map(({id,name,img,price,des})=>{
            
            return <div className={styled.super} key={id}>
                <img className={styled.img} src={img} alt="" />
                <p className={styled.name}>{name}</p>
                <p className={styled.price}>{price}</p>
                <p>{des}</p>
            </div>
        })}

    </div>;
}


export default SuperDeal;