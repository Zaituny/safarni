import React, { Fragment } from "react";
import styles from "./Login.module.scss";
import { Layout } from "../../layouts";
import Button from "../../elements/Button/Button"
import Link from "../../elements/Link/Link"


export default () => {

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
            <h1>Sign In</h1>
          </div>
          <div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Email" style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Password" style={{width:'60%'}}/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className={styles.inputlist}>
                <p>By signing in, I agree to Safarni Terms and Conditions, Privacy</p>
                <p>Statement and Safarni Rewards Terms and Conditions</p>
            </div>
            <div className={styles.btnlist}>
                <Link hoverStyle={{background:'#1a4c3c', color:'#fff', width:'60%'}} style={{width:'60%'}} className={styles.imgsection_btn} url="/about">
                  Sign In
                </Link>
            </div>
          </div>
        </div>
        
      </Layout>
    </Fragment>
  )

}