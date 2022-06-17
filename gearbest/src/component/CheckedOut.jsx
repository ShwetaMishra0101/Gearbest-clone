import React from "react";
import styled from "../style/checked.module.css";

const CheckedOut = () => {
    onsubmit =()=>{
        alert("sucess")
    }
  return (
    <div className={styled.chMianDiv}>
      <h1>Add New Address</h1>
      <div className={styled.childDiv}>
        <form onSubmit={onsubmit}>
            
          <label htmlFor="">First name:</label>
          <input className={styled.inp} type="text" name="" id="" required />
          <br />
          <br />
          <label htmlFor="">Last Name:</label>
          <input className={styled.inp} type="text" name="" id="" />
          <br />
          <br />
          <label htmlFor="">Address Line 1:</label>
          <input className={styled.inp} type="text" name="" id="" placeholder="Street address, flat,suite, unit, building,floor,etc."  required/>
          <br />
          <br />
          <label htmlFor="">Address Line 2:</label>
          <input className={styled.inp} type="text" name="" id="" />
          <br />
          <br />
          <label htmlFor="">Country/Region:</label>
          <select

className={styled.inp}
            
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>United States</option>
            <option value="1">Brazil</option>
            <option value="2">France</option>
            <option value="3">Germany</option>
            <option value="4">Italy</option>
            <option value="5">Poland</option>
            <option value="6">Spin</option>
            <option value="7">United States</option>
            <option value="8">United Kingdom</option>
            <option value="9">Aland Island</option>
            <option value="10">Albania</option>
            <option value="11">Algeria</option>
          </select>
          <br />
          <br />
          <label htmlFor="">State / Province:</label>
          <select 
          className={styled.inp}
          
            class="form-select"
            aria-label="Default select example"
          >
            <option selected>Please Select</option>
            <option value="1">Alabama</option>
            <option value="2">Alaska</option>
            <option value="3">AriZona</option>
            <option value="4">California</option>
            <option value="5">Colorado</option>
            <option value="6">Connecticut</option>
            <option value="7">Delaware</option>
            <option value="8">District of Columbia</option>
            <option value="9">Florida</option>
          </select>
          <br />
          <br />
          <label htmlFor="">City:</label>
          <input className={styled.inp} type="text" name="" id="" />
          <br />
          <br />
          <label htmlFor="">ZIP / Postal Code:</label>
          <input className={styled.inp} type="text" name="" id="" />
          <br />
          <br />
          
          <div class="input-group flex-nowrap">
          <label htmlFor="">Phone Number:</label>
            <span class="input-group-text" id="addon-wrapping">
              +1 
            </span>
            
            <input 
         
         className={styled.inp}
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Phonenumber"
              aria-describedby="addon-wrapping" required
            />
          </div>
          <br />
          <br />
          <label htmlFor="">E-mail Address:</label>
          <input className={styled.inp} type="email" name="" id="" required />
          <br />
          <br />
          <input type="checkbox" name="" id="" required/>
          <label htmlFor="">Set as my default address</label>
          <br />
          <br />
          <button className={styled.btn}>Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default CheckedOut;
