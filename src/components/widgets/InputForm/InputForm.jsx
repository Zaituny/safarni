import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./InputForm.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";
import { hotelNames, hotelDescribtions } from "../../hotelData";
import { useNavigate } from 'react-router-dom';

export default ({ data = [] }) => {


  // const s = 'stays';
  // const [selected, setSelected] = useState( s? s : 'stays');

  // const handleChange = (event) => {
  //   setSelected(event.target.value);
  // };


  const [Leaving, setLeaving] = useState("");
  const [going, setGoing] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [travelers, setTravelers] = useState("");
  const navigate = useNavigate();


  const LeavingChangeHandler = (event) => {
    setLeaving(event.target.value)
  }
  const GoingChangeHandler = (event) => {
    setGoing(event.target.value)
  }
  const CheckInChangeHandler = (event) => {
    setCheckIn(event.target.value)
  }
  const CheckOutChangeHandler = (event) => {
    setCheckOut(event.target.value)
  }
  const TraverlerChangeHandler = (event) => {
    setTravelers(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    async function temp (){
      try{
        await fetch("http://localhost:5000/delete/hotels",{
          method: "delete"
          });
          await fetch("http://localhost:5000/hotels/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                name: hotelNames[Math.floor(Math.random() * hotelNames.length)],
                star: Math.floor(Math.random() * 5) + 1,
                img:"https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg",
                description: hotelDescribtions[Math.floor(Math.random() * hotelDescribtions.length)],
                rating: Math.floor(Math.random() * 10) + 1,
                reviews: "Wonderful (1,200 reviews)",
                price: Math.floor(Math.random() * 1000) + 50,
                payEvery: "per night"
              }),
            
          });
          await fetch("http://localhost:5000/hotels/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                name: hotelNames[Math.floor(Math.random() * hotelNames.length)],
                star: Math.floor(Math.random() * 5) + 1,
                img:"https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg",
                description: hotelDescribtions[Math.floor(Math.random() * hotelDescribtions.length)],
                rating: Math.floor(Math.random() * 10) + 1,
                reviews: "Wonderful (1,200 reviews)",
                price: Math.floor(Math.random() * 1000) + 50,
                payEvery: "per night"
              }),
            
          });
          await fetch("http://localhost:5000/hotels/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                name: hotelNames[Math.floor(Math.random() * hotelNames.length)],
                star: Math.floor(Math.random() * 5) + 1,
                img:"https://i.ibb.co/9cL1vwS/pexels-donald-tong-189296.jpg",
                description: hotelDescribtions[Math.floor(Math.random() * hotelDescribtions.length)],
                rating: Math.floor(Math.random() * 10) + 1,
                reviews: "Wonderful (1,200 reviews)",
                price: Math.floor(Math.random() * 1000) + 50,
                payEvery: "per night"
              }),
            
          });
          navigate("/hotel-search");
        }catch(err){
          console.log(err);
        }        
    }
    temp();
  }
  return (
    <div className={styles.searchbox}>
      <form onSubmit = {onSubmitHandler} action = "/" method = "post">
      <div className={styles.selectlist}>
        Travelers:
        <select name="number" onChange={(e)=>TraverlerChangeHandler(e)} id="number" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
          <option value="10">10+</option>
        </select>
      </div>
      <div className={styles.inputlist}>
        <input type="text" placeholder="Leaving from" onChange={(e)=>LeavingChangeHandler(e)} style={{flexGrow:'6'}}/>
        <input type="text" placeholder="Going to" onChange={(e)=>GoingChangeHandler(e)} style={{flexGrow:'6'}} />
        <input type="date" placeholder="Check In:" onChange={(e)=>CheckInChangeHandler(e)}  required style={{flexGrow:'1'}} />
        <input type="date" placeholder="Check Out:" onChange={(e)=>CheckOutChangeHandler(e)}  required style={{flexGrow:'1'}}/>
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
