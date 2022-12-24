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
        <h2>Car Type</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> Mini
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Standard
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> SUV
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Minivan
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Capacity</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> 2 seater
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 5 seater
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 7 seater
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Price Per Night</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> Less Than $1,000
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> $1,000-$1,500
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> $1,500-$2,000
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> $2,000+
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Type</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> Manual
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Automatic
        </label>
      </div>
    </div>
  );
};
