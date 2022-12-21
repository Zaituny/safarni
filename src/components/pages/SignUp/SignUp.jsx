import React, { Fragment } from "react";
import styles from "./SignUp.module.scss";
import { Layout } from "../../layouts";
import Button from "../../elements/Button/Button"

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
            <h1>Sign Up</h1>
          </div>
          <div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Email" style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="First Name" style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Last Name" style={{width:'60%'}}/>
            </div>
            <div className={styles.inputlist}>
              <input type="text" placeHolder="Password" style={{width:'60%'}}/>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>
        
      </Layout>
    </Fragment>
  )

}