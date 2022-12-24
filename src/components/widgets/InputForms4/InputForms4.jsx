import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./InputForms4.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";

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
    var notFound = false;
    event.preventDefault();
    async function temp (){
      try{
        
        }catch(err){
          console.log(err);
        }        
    }
    temp();
  }

  return (
    <div className={styles.searchbox}>
      <form onSubmit = {onSubmitHandler} action = "/" method = "post">
      <div className={styles.list}>
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
        <div className={styles.selectlist}>
            Class:
            <select name="number" onChange={(e)=>TraverlerChangeHandler(e)} id="number" >
            <option value="1">Economy</option>
            <option value="2">Economy Plus</option>
            <option value="3">Business</option>
            <option value="4">Frist</option>
            </select>
        </div>
      </div>
      <div className={styles.inputlist}>
        <input type="text" placeholder="Leaving from" onChange={(e)=>LeavingChangeHandler(e)} style={{flexGrow:'6'}}/>
        <input type="text" placeholder="Going to" onChange={(e)=>GoingChangeHandler(e)} style={{flexGrow:'6'}} />
        <input type="date" placeholder="Departure:" onChange={(e)=>CheckInChangeHandler(e)}  required style={{flexGrow:'1'}} />
        <input type="date" placeholder="Arrival:" onChange={(e)=>CheckOutChangeHandler(e)}  required style={{flexGrow:'1'}}/>
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
