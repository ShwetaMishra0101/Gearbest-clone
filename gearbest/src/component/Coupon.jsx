import React,{useState} from 'react';
import coupen from '../data/Cup.json'
import styled from './coupon.module.css'
const Coupon = () => {
    const [data,setData] = useState(coupen)

    return <div className={styled.coupMainDiv} >

{data && data.map(({id,name,img,price})=>{
    return <div className={styled.coup} key={id}>
        <img className={styled.img} src={img} alt="" />
        <p className={styled.name}>{name}</p>
        <p className={styled.pric}>{price}</p>

    </div>
})}


    </div>;
}



export default Coupon;