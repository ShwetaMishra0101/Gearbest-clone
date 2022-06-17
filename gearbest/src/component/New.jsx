import React,{useState} from 'react';
import data from '../data/new.json';
import styled from '../style/new.module.css'
import { BsSuitHeart} from "react-icons/bs";

const New = () => {

    const [newData,setNewData] = useState(data);

    return <div className={styled.newMainDiv}>

{newData&&newData.map(({id,name,price,dis,image})=>{
    return <div className={styled.new} key={id}>
        <img className={styled.img} src={image} alt="" />
        <p className={styled.name}>{name}</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <p className={styled.price}>{price}</p>
        <p><BsSuitHeart className={styled.icone}/></p>
       </div>
        {/* <p>{dis}</p> */}
    </div>
})}
    </div>;
}


export default New;