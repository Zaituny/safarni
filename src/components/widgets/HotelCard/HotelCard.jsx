import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./HotelCard.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Options } from "../../elements";

export default ({ data = [] }) => {


  const s = 'stays';
  const [selected, setSelected] = useState( s? s : 'stays');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  function FlighrCard(props) {
    return (
      <div className={styles.card} style={{padding:'0px', minHeight:'256px', flexDirection:'row', border:'none'}}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
          <div style={{flexBasis: '40%', flexDirection:'row'}}>
            <img src={props.img} alt="" />
          </div>
          <div className={styles.hotel_info} style={{flexBasis: '45%', padding:'15px', justifyContent:'space-between'}}>
            <h1>Hyatt Place London  <br />
            {
              [...Array(5)].map((e, i) => <i className="fa-solid fa-star" key={i}></i>)
            }
            </h1>
            <h3 style={{fontSize:'12px'}}>{props.description}</h3>
            <h2> <b>{props.rating}</b>  {props.reviews}</h2>
          </div>
          <div style={{padding:'15px', flexBasis: '10%', alignItems:'end', justifyContent:'end'}}>
            <h1 style={{fontSize:'32px'}}>{props.price}</h1>
            <h3>{props.payEvery}</h3>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className={styles.cards}>
      <FlighrCard 
        img="https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg"
        description="Consider a stay at Hyatt Place London Heathrow Airport and take advantage of dry cleaning/laundry services, a bar, and a gym. The onsite restaurant, Gallery Café, features British cuisine. Free in-room WiFi, with speed of 500+ Mbps."
        rating="9.0/10"
        reviews="Wonderful (1,200 reviews)"
        price="$121"
        payEvery="per night"
      />
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );
};
