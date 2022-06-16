import React,{useState} from 'react';
import data from '../data/new.json';
import styled from '../style/new.module.css'
const New = () => {

    const [newData,setNewData] = useState(data);

    return <div className={styled.newMainDiv}>

{newData&&newData.map(({id,name,price,dis,image})=>{
    return <div className={styled.new} key={id}>
        <img className={styled.img} src={image} alt="" />
        <p className={styled.name}>{name}</p>
        <p className={styled.price}>{price}</p>
        <p>{dis}</p>
    </div>
})}
    </div>;
}


export default New;