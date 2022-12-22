import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./CarCard.module.scss";
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
          <div style={{flexBasis: '20%'}}>
            <img src="https://i.ibb.co/xLX4jVf/04f5c0900b780dc7c9a4e6c4ea1d4c5e.png" alt="" />
          </div>
          <div style={{flexBasis: '50%'}}>
            <h1>Hyundai Tucson</h1>
            <br />
            <h3>SUV</h3>
            <h3>4 Seater</h3>
            <h3>Automatic</h3>
          </div>
          <div style={{flexBasis: '20%', alignItems:'end'}}>
            <div style={{display:'flex', flexDirection:'column' ,alignItems:'end'}}>
              <h1 style={{fontSize:'26px'}}>$1200</h1>
              <h3>per week</h3>
            </div>
            <div className={styles.btnlist}>
              <button>
                Reserve
              </button>
            </div>
          </div>
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
