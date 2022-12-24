import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./FlightCard.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Options } from "../../elements";
import { set } from "mongoose";
import { useNavigate } from 'react-router-dom';

export default ({ data = [] }) => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    navigate("/");
    navigate("/car-reserve");
  }
  const [flight, setSearchresults] = useState([])
  useEffect(()=>{
    async function prepareResults(){
      const response = await fetch("http://localhost:5000/searchresults");
      if(!response.ok){
        alert("error while fetching flight data");
        return;
      }
      const search = await response.json();
      setSearchresults(search); 
    }
    prepareResults();
    return;
  }, flight.length);
  function FlightCard(props) {
    return (
      <div className={styles.card}>
        <div style={{width:'100%', display:'flex'}}>
          <div style={{flexBasis: '33%'}}>
            <h1>{props.time}</h1>
            <h3>{props.destination}</h3>
            <h3> <i className="fa-regular fa-clock"></i>{props.airline}</h3>
          </div>
          <div style={{flexBasis: '33%'}}>
            <h3>{"duration: " + props.duration + " hours"}</h3>
            <h3>{"layover time: " + props.layoverTime + " hours"}</h3>
          </div>
          <div style={{flexBasis: '33%', alignItems:'end', justifyContent:'end'}}>
            <h1 style={{fontSize:'26px'}}>{"$"+props.price}</h1>
            <h3>{props.tripPerTraveler}</h3>
          </div>
        </div>
        <div style={{flexBasis: '100%', borderTop:'1px solid #0d261e', margin:'10px -15px -10px', padding:'5px 15px'}}>
          <h2>{props.included}</h2>
        </div>
        <div className={styles.btnlist}>
          <form onSubmit = {onSubmitHandler} action = "/" method = "post"><button>
            Reserve
          </button></form>
        </div>
      </div>
    );
  }

  function CreateCard(flight) {
    return (
      <FlightCard 
        key={flight.id}
        time={flight.time}
        destination={flight.destination}
        airline={flight.airline}
        duration={flight.duration}
        layoverTime={flight.layoverTime}
        price={flight.price}
        tripPerTraveler={flight.tripPerTraveler}
        included={flight.included}
      />
    );
  }


  return (
    <div className={styles.cards}>
      {flight.map(CreateCard)}
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );

};
