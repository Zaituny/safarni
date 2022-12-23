import React, { Fragment } from "react";
import styles from "./SignUp.module.scss";
import { Layout } from "../../layouts";
import Button from "../../elements/Button/Button"
import Link from "../../elements/Link/Link"
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";


export default () => {
  const [Email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const EmailChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
}
const FirstNameChangeHandler = (event) => {
  setFirstName(event.target.value)
}
const LastNameChangeHandler = (event) => {
  setLastName(event.target.value);
}
  const onSubmitHandler = (event) => {
    event.preventDefault();
    async function temp (){
      try{
          await fetch("http://localhost:5000/users/add",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: 
              JSON.stringify({
                email: Email,
                firstname: firstName,
                lastname: lastName,
                password: Password
              }),
            
          })
        }catch(err){
          console.log(err);
        }
        alert("added successfully");
        navigate("/");
    }
    temp();
  }
  return (
    <Fragment>
    <Layout
          style={{
            background: "rgba(0,0,0,0)",
            boxShadow:'none',
            marginTop:'200px',
            paddingBottom: '10rem',
          }}
          col="1"
          mode="dark"
        >
        <div>
          <div className={styles.inputlist}>
            <h1>Create an account</h1>
          </div>
          <form onSubmit = {onSubmitHandler} action = "/" method = "post">
          <div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Email" onChange={(e)=>EmailChangeHandler(e)} style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="First Name" onChange={(e)=>FirstNameChangeHandler(e)} style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Last Name" onChange={(e)=>LastNameChangeHandler(e)} style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Password" onChange={(e)=>PasswordChangeHandler(e)} style={{width:'60%'}}/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.inputlist}>
                <p>By creating an account, I agree to Safarni Terms and Conditions, Privacy</p>
                <p>Statement and Safarni Rewards Terms and Conditions</p>
            </div>
            <div className={styles.btnlist}>
                {/* <Link hoverStyle={{background:'#1a4c3c', color:'#fff', width:'60%'}} style={{width:'60%'}} className={styles.imgsection_btn} url="/about">
                  Sign Up
                </Link> */}
                <input type ="submit" className={styles.imgsection_btn} style={{width:'60%'}}/>
            </div>
          </div>
          </form>
        </div>
        
      </Layout>
    </Fragment>
  )

}
