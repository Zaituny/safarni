import React, { Fragment } from "react";
import styles from "./Login.module.scss";
import { Layout } from "../../layouts";
import Button from "../../elements/Button/Button"
import Link from "../../elements/Link/Link"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// const key = "b1mZrU0Mv3doCle2fe4mKp8llNF8G54gFgrsAFjsftkkKV1GwEaWQ43JE7yBPNm6";

export default () => {
  const [UserName, setUsername] = useState("");
  const [PassWord, setPassword] = useState("");
  const navigate = useNavigate();
  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }
  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
}

const onSubmitHandler = (event) => {
  var notFound = false;
  event.preventDefault();
  async function temp (){
    try{
      const response = await fetch(`http://localhost:5000/users/${UserName}`);
      if(!response.ok){
        alert("error!");
        notFound = true;
        return;
      }
      const user = await response.json();
      console.log(user);
      if(!user){
        alert("incorrect email or email doesn't exist please sign up if you don't have an account");
        notFound = true;
        return;
      }
      if(PassWord !== user.Password){
        notFound = true;
        return;
      }
      }catch(err){
        console.log(err);
      }
      if(notFound){
        navigate("/stays");
        navigate("Login");
      }
      else{
        navigate("/");
      }
      
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
          <form onSubmit = {onSubmitHandler} action = "/" method = "post">
            <div className={styles.inputlist}>
              <h1>Sign In</h1>
            </div>
            <div>
              <div className={styles.inputlist}>
                <input type="text" placeHolder="Email" onChange={(e)=>UsernameChangeHandler(e)} style={{width:'60%'}}/>
              </div>
              <div className={styles.inputlist}>
                <input type="password" placeHolder="Password" onChange={(e)=>PasswordChangeHandler(e)} style={{width:'60%'}}/>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className={styles.inputlist}>
                  <p>By signing in, I agree to Safarni Terms and Conditions, Privacy</p>
                  <p>Statement and Safarni Rewards Terms and Conditions</p>
              </div>
              <div className={styles.btnlist}>
                  <input type ="submit" className={styles.imgsection_btn} style={{width:'60%'}}/>
                  <a href="./Sign-Up">Don't have an account?</a> 
              </div>
            </div>
          </form>
        </div>
        
      </Layout>
    </Fragment>
  )

  {/* <Link hoverStyle={{background:'#1a4c3c', color:'#fff', width:'60%'}} style={{width:'60%'}} className={styles.imgsection_btn} url="/about">
                    Sign In
                  </Link> */}

}
