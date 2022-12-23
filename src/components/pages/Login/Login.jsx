import React, { Fragment } from "react";
import styles from "./Login.module.scss";
import { Layout } from "../../layouts";
import Button from "../../elements/Button/Button"
import Link from "../../elements/Link/Link"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default () => {
  const [UserName, setUsername] = useState("")
  const [PassWord, setPassword] = useState("")
  const navigate = useNavigate();
  const UsernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }
  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
}

const onSubmitHandler = (event) => {
  var notFound = false
  event.preventDefault();
  async function temp (e){
    try{
      const response = await axios.get("/loginAttempt");
      response.data.forEach(element => {
        if(element.Username === UserName && element.Password === PassWord){
            navigate("/");
            return;
          }
          else if(element.Username === UserName && element.Password !== PassWord){
            setUsername("");
            setPassword("");
            navigate("/stays");
            navigate("Login");
            return;
          }
        });
        notFound = true;
      }catch(err){
        console.log(err);
      }
      return notFound;
  }
  notFound = temp(notFound);
  if(notFound){
    navigate("/stays");
    navigate("Login");
  }
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
                <input type="text" placeHolder="Password" onChange={(e)=>PasswordChangeHandler(e)} style={{width:'60%'}}/>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className={styles.inputlist}>
                  <p>By signing in, I agree to Safarni Terms and Conditions, Privacy</p>
                  <p>Statement and Safarni Rewards Terms and Conditions</p>
              </div>
              <div className={styles.btnlist}>
                  {/* <Link hoverStyle={{background:'#1a4c3c', color:'#fff', width:'60%'}} style={{width:'60%'}} className={styles.imgsection_btn} url="/about">
                    Sign In
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
