import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./InputForm2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";
import { useNavigate } from 'react-router-dom';


export default ({ data = [] }) => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    navigate("/");
    navigate("/car-search");
  }
  return (
    <div className={styles.searchbox}>
      <form onSubmit = {onSubmitHandler} action = "/" method = "post">
      <div>
        <div className={styles.inputlist}>
        <input type="text" placeholder="Pick-up" style={{flexGrow:"6"}}/>
        <input type="text" placeholder="Drop-off" style={{flexGrow:"6"}} />
        </div>
        <div className={styles.inputlist}>
        <input type="date" placeholder="Pick-up date:"  required style={{flexGrow:'3'}} />
        <input type="date" placeholder="Drop-off date:"  required style={{flexGrow:'3'}}/>
        <input type="date" placeholder="Pick-up date:"  required style={{flexGrow:'3'}} />
        <input type="date" placeholder="Drop-off date:"  required style={{flexGrow:'3'}}/>
        </div>
      </div>
      <div className={styles.btnlist}>
        {/* <Link url='/search' hoverStyle={{background:'transparent', color:'#26735b', border:'1px solid #26735b'}}>
          Search
        </Link> */}
        <input type ="submit" className={styles.imgsection_btn} style={{width:'20%'}}/>
      </div>
      </form>
    </div>
  );
};
