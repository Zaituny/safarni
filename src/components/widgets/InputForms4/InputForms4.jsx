import React, { useRef, useState} from "react";
import Slider from "react-slick";
import styles from "./InputForms4.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { Link } from "../../elements";
import { useNavigate } from 'react-router-dom';

export default ({ data = [] }) => {
  const airlineData = ["EgyptAir", "Lufthansa", "British Aitlines", "KLM"]
  const navigate = useNavigate();
  function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }
  // const s = 'stays';
  // const [selected, setSelected] = useState( s? s : 'stays');

  // const handleChange = (event) => {
  //   setSelected(event.target.value);
  // };

  const [Leaving, setLeaving] = useState("");
  const [Going, setGoing] = useState("");
  const [Departure, setCheckIn] = useState("");
  const [Arrival, setCheckOut] = useState("");
  const [travelers, setTravelers] = useState("");

  const LeavingChangeHandler = (event) => {
    setLeaving(event.target.value)
  }
  const GoingChangeHandler = (event) => {
    setGoing(event.target.value)
  }
  const DepartureChangeHandler = (event) => {
    setCheckIn(event.target.value)
  }
  const ArrivalChangeHandler = (event) => {
    setCheckOut(event.target.value)
  }
  const TraverlerChangeHandler = (event) => {
    setTravelers(event.target.value)
  }

  const onSubmitHandler = (event) => {
    var date = randomDate(Departure, Arrival, 0, 23);
    event.preventDefault();
    async function temp (){
      try{
        await fetch("http://localhost:5000/delete/searchresults",{
          method: "delete"
          });
          await fetch("http://localhost:5000/searchresults/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                destination: Leaving.toString() + " - " + Going,
                time: date,
                airline: airlineData[Math.floor(Math.random() * 5)],
                duration: Math.floor((Math.random() * 23)) + 1,
                layoverTime: Math.floor((Math.random() * 23)) + 1,
                price: Math.floor((Math.random() * 1000)) + 400,
                tripPerTraveler: "Round trip per traveler",
                included: "Carry-on included"
              }),
            
          });
          await fetch("http://localhost:5000/searchresults/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                destination: Leaving.toString() + " - " + Going,
                time: date,
                airline: "EgyptAir",
                duration: Math.floor((Math.random() * 23)) + 1,
                layoverTime: Math.floor((Math.random() * 23)) + 1,
                price: Math.floor((Math.random() * 1000)) + 400,
                tripPerTraveler: "Round trip per traveler",
                included: "Carry-on included"
              }),
            
          });
          await fetch("http://localhost:5000/searchresults/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                destination: Leaving.toString() + " - " + Going,
                time: date,
                airline: "EgyptAir",
                duration: Math.floor((Math.random() * 23)) + 1,
                layoverTime: Math.floor((Math.random() * 23)) + 1,
                price: Math.floor((Math.random() * 1000)) + 400,
                tripPerTraveler: "Round trip per traveler",
                included: "Carry-on included"
              }),
            
          });
          navigate("/");
          navigate("/search");
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
        <input type="date" placeholder="Departure:" onChange={(e)=>DepartureChangeHandler(e)}  required style={{flexGrow:'1'}} />
        <input type="date" placeholder="Arrival:" onChange={(e)=>ArrivalChangeHandler(e)}  required style={{flexGrow:'1'}}/>
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
