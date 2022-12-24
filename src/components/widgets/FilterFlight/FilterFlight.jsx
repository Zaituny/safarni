import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "../Filters/Filters.module.scss"
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
    <div className={styles.filters_section}>
      <h1 >Filter by</h1>
      <div className={styles.filter}>
        <h2>Stops</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> No Stops
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 1 Stop
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 2 Stops
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Airlines</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> EgyptAir
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Lufthansa
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> British Airlines
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> KLM
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Departure Time</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> 12:00am-4:59am
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 5:00am-11:59am
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 12:00pm-5:59am
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 6:00pm-11:59am
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Arrival Time</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> 12:00am-4:59am
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 5:00am-11:59am
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 12:00pm-5:59am
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 6:00pm-11:59am
        </label>
      </div>
    </div>
  );
};
