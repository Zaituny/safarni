import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./HotelCard.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Options } from "../../elements";
import hotels from "../HotelCard";

export default ({ data = [] }) => {


  const s = 'stays';
  const [selected, setSelected] = useState( s? s : 'stays');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  function HotelCard(props) {
    return (
      <div className={styles.card} style={{padding:'0px', minHeight:'256px', flexDirection:'row', border:'none'}}>
        <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>
          <div style={{flexBasis: '40%', flexDirection:'row'}}>
            <img src={props.img} alt="" />
          </div>
          <div className={styles.hotel_info} style={{flexBasis: '45%', padding:'15px', justifyContent:'space-between'}}>
            <h1>{props.name}<br />
            {
              props.star
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

  function CreateCard(hotel) {
    return (
      <HotelCard
        key={hotel.id}
        name={hotel.name}
        star={hotel.star}
        img={hotel.img}
        description={hotel.description}
        rating={hotel.rating}
        reviews={hotel.reviews}
        price={hotel.price}
        payEvery={hotel.payEvery}
      />
    );
  }


  return (
    <div className={styles.cards}>
      {hotels.map(CreateCard)}
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );
};
