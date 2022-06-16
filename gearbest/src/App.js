// import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import data from './home.json'
import Slideshow from './component/Slider'
import Home from './component/Home'
import React,{useState} from 'react'
// console.log(data)
import AllRoute from './component/AllRoute';
import Timer from './component/Timer';
import { BiSlider } from 'react-icons/bi';
import Slider from './component/Slider';


function App() {
 
  return (
    <div className="App">

{/* <Slider /> */}

     
     <Navbar />

    {/* <Home /> */}
    <AllRoute />

    {/* <Timer /> */}

   {/* <BiSlider/> */}

     <Footer />

    </div>
  );
}

export default App;
