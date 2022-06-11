import React, { useState, useEffect } from "react";
import styled from "./home.module.css";

const Home = () => {
    

  const [home, setHome] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch(`http://localhost:8080/home`);
      let data = await res.json();
      setHome(data);
      console.log(data);
    };
    getData();
  }, []);

 
  
  return (
      <div>
      <h3 className={styled.h3}>RECOMMENDED FOR YOU</h3>
    <div className={styled.homeMainDiv}>
        

      {home.map((i) => {
        return <div key={i.id} className={styled.recommended}>
          <div>
            <img
              style={{ height: "200px", width: "100%" }}
              src={i.img}
              alt=""
            />
            <p>{i.name}</p>
            <h3>{i.Price}</h3>
          </div>
        </div>;
      })}
    </div>
    </div>
  );
};

export default Home;
