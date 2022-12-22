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


  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div style={{width:'100%', display:'flex'}}>
          <div style={{flexBasis: '33%'}}>
            <h1>4:35pm - 8:20am</h1>
            <h3>Cairo (CAI) - London (LHR)</h3>
            <h3> <i className="fa-regular fa-clock"></i> Lufthansa</h3>
          </div>
          <div style={{flexBasis: '33%'}}>
            <h3>17h 45m (1 stop)</h3>
            <h3>11h 30m in Vienna (VIE)</h3>
          </div>
          <div style={{flexBasis: '33%', alignItems:'end', justifyContent:'end'}}>
            <h1 style={{fontSize:'26px'}}>$743</h1>
            <h3>Round trip per traveler</h3>
          </div>
        </div>
        <div style={{flexBasis: '100%', borderTop:'1px solid #0d261e', margin:'10px -15px -10px', padding:'5px 15px'}}>
          <h2>Carry-on included</h2>
        </div>
      </div>
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );
};
