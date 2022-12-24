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
        <h2>Popular Filters</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> Breakfast Included
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Free Airport Shuttle
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Free Cancellation
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> Hotel
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Price Per Night</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> Less Than $100
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> $100-$200
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> $200-$300
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> $300+
        </label>
      </div>
      <div className={styles.filter}>
        <h2>Rating</h2>
        <label>
          <input type="checkbox" /><span className="checkmark"></span> 5 Stars
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 4 Stars
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 3 Stars
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 2 Stars
        </label>
        <label >
          <input type="checkbox" /><span className="checkmark"></span> 1 Star
        </label>
      </div>
    </div>
  );
};
