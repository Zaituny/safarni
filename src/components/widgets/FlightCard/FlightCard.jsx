import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./FlightCard.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Options } from "../../elements";

export default ({ data = [] }) => {


  const s = 'stays';
  const [selected, setSelected] = useState( s? s : 'stays');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

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
            <h3>{props.duration}</h3>
            <h3>{props.layoverTime}</h3>
          </div>
          <div style={{flexBasis: '33%', alignItems:'end', justifyContent:'end'}}>
            <h1 style={{fontSize:'26px'}}>{props.price}</h1>
            <h3>{props.tripPerTraveler}</h3>
          </div>
        </div>
        <div style={{flexBasis: '100%', borderTop:'1px solid #0d261e', margin:'10px -15px -10px', padding:'5px 15px'}}>
          <h2>{props.included}</h2>
        </div>
      </div>
    );
  }


  return (
    <div className={styles.cards}>
      <FlightCard 
        time="4:35pm - 8:20am"
        destination="Cairo (CAI) - London (LHR)"
        airline="Lufthansa"
        duration="17h 45m (1 stop)"
        layoverTime="11h 30m in Vienna (VIE)"
        price="$743"
        tripPerTraveler="Round trip per traveler"
        included="Carry-on included"
      />
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );
};
