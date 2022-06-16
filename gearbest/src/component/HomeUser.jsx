import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

import data from '../home.json'

const HomeUser = () => {
    const [home,setHome] = useState(data);
    const prem = useParams()

    useEffect(()=>{
        setHome(home)

    },prem.id)

    return <div>
        {home&&home.map(({id,img,price,name})=>{
            return <div>
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
        })}
    </div>;
}



export default HomeUser;