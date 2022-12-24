import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./InputForm3.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";

export default ({ data = [] }) => {
  const [Going, setGoing] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const GoingChangeHandler = (event) => {
    setGoing(event.target.value)
  }
  const checkInChangeHandler = (event) => {
    setCheckIn(event.target.value)
  }
  const checkOutChangeHandler = (event) => {
    setCheckOut(event.target.value)
  }

  return (
    <div className={styles.searchbox}>
      <div className={styles.selectlist}>
        Travelers:
        <select name="number" id="number" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
          <option value="10">10+</option>
        </select>
      </div>
      <div className={styles.inputlist}>
        <input type="text" placeholder="Going to" style={{flexGrow:'4'}} />
        <input type="date" placeholder="Check In:"  required style={{flexGrow:'1'}} />
        <input type="date" placeholder="Check Out:"  required style={{flexGrow:'1'}}/>
      </div>
      <div className={styles.btnlist}>
        <Link url='/search' hoverStyle={{background:'transparent', color:'#26735b', border:'1px solid #26735b'}}>
          Search
        </Link>
      </div>
    </div>
  );
};
