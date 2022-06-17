import React,{useState} from 'react';
import { BsSuitHeart} from "react-icons/bs";

import styled from '../style/app.module.css'
import data from '../data/app.json'

const AppOnly = () => {
    const [app,setApp] = useState(data)
    return <div className={styled.AppMainDiv} >

{app && app.map(({id,name,img,price,dis})=>{

    return <div className={styled.app} key={id}>
        <img className={styled.img} src={img} alt="" />
        <p className={styled.name}>{name}</p>
        <p className={styled.price}>{price}</p>
        {/* <p>{dis}</p> */}
        <p style={{justifyContent:"end"}}><BsSuitHeart className={styled.icone}/></p>

    </div>
})}
    </div>;
}


export default AppOnly;