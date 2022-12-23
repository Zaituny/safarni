import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./CarCard.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Button } from "../../elements";
import { Options } from "../../elements";
import cars from "../CarCards"

export default ({ data = [] }) => {


  const s = 'stays';
  const [selected, setSelected] = useState( s? s : 'stays');

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  function CarCard(props) {
    return (
    <div className={styles.card}>
     <div style={{width:'100%', display:'flex'}}>
        <div style={{flexBasis: '20%'}}>
          <img src={props.img} alt="" />
        </div>
        <div style={{flexBasis: '50%'}}>
          <h1>{props.name}</h1>
          <br />
          <h3>{props.carType}</h3>
          <h3>{props.capacity}</h3>
          <h3>{props.type}</h3>
        </div>
        <div style={{flexBasis: '20%', alignItems:'end'}}>
          <div style={{display:'flex', flexDirection:'column' ,alignItems:'end'}}>
            <h1 style={{fontSize:'26px'}}>{props.price}</h1>
            <h3>{props.payType}</h3>
          </div>
          <div className={styles.btnlist}>
            <button>
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
    );
  }

  function CreateCard(car) {
    return (
      <CarCard 
        key={car.id}
        name={car.name}
        img={car.img}
        carType={car.carType}
        capacity={car.capacity}
        type={car.type}
        price={car.price}
        payType={car.payType}
      />
    );
  }


  return (
    <div className={styles.cards}>
      {cars.map(CreateCard)}
      <div className={styles.btnlist}>
        <button>
          See More
        </button>
      </div>
    </div>
  );
};
