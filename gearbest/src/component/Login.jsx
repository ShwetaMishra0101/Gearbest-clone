import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import styled from '../style/login.module.css';
import { useNavigate } from 'react-router-dom'
// import "./login.css";
const Login = () => {
  const navigate=useNavigate()
  const[logincreds,setlogincreds]=useState({})
  const {login}=useContext(AuthContext)
  const handleChange=(e)=>{
      
         const{name,value}=e.target;
         setlogincreds({
             ...logincreds,
             [name]:value,
         })
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      login()
    navigate("/Everythings");
    
  }
  const onClick = () => {
    navigate("./payment");
  }
  return (
    <div className={styled.maindiv}>
      <form onSubmit={handleSubmit}>
        <label>SIGN IN</label>
        <br />
        <br />
        {/* <label className="email">Email address</label> */}
        <br/>
        <input className={styled.inp} type="email" name="email" placeholder="Email" onChange={handleChange} />
        <br />
        <br />
        {/* <label className="password">Password</label> */}
        <br/>
        <input className={styled.inp}   type="password" name="password" placeholder="Password" onChange={handleChange} />
        <br />
        <br/>
        <div>
            <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">Keep me signed in ? </label>
        </div>
       <div>
       <label htmlFor="">Forget your password</label>
       </div>

        </div>
        <br />
        <br />
        <button type="submit" className="btn">SIGN IN</button>
      </form>

    </div>
  );
};

export default Login;