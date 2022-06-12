// import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import data from './home.json'

import Home from './component/Home'
import React,{useState} from 'react'
// console.log(data)
// import AllRoute from './component/AllRoute';


function App() {
  console.log(data)
  const [num,setData]= useState(data)
  return (
    <div className="App">

{num && num.map(({name,id})=>(
  <div>
    <p>{name}</p>
  </div>
))}
     
     <Navbar />

    
    {/* <AllRoute /> */}

   

     {/* <Footer /> */}

    </div>
  );
}

export default App;
