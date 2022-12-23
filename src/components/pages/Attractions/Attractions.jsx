import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
} from "../../widgets";
import { Layout } from "../../layouts";
import styles from "./Attractions.module.scss";
import {Options, InputForm3} from "../../widgets"
import { Link } from "../../elements";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <article >
        <Layout
          style={{
            background: "rgba(0,0,0,0)",
            boxShadow:'none',
            marginTop:'130px',
            paddingBottom: '10rem',
          }}
          col="1"
          mode="dark"
        >
          <div className={styles.slide}>
            <div className={styles.intro}>
              <h1>Travel Made Easy</h1>
              <Options s = "attractions"/>
              <InputForm3/>
              <div className={styles.font}>
                <h2>Most Visited</h2>
              </div>
              <div className={styles.imgsection}>
                <div className="attractions-frame64">
                  <div className={styles.imgsection2}>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb9db786-6755-44ec-ab79-a17b78b5a869/753469d8-c161-47d3-ba19-48730b379085?org_if_sml=1112095"
                      alt="Rectangle273228"
                      
                    />
                  </div>
                  <div className={styles.imgsection2}>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb9db786-6755-44ec-ab79-a17b78b5a869/55022e5c-e607-458d-aa9b-b9ea7147c034?org_if_sml=181293"
                      alt="Rectangle253225"
                      
                    />
                  </div>
                </div>

                <div className="attractions-frame64">
                  <div className={styles.imgsection2}>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb9db786-6755-44ec-ab79-a17b78b5a869/a2397c79-e80f-4564-bfbd-9f8d0f506d17?org_if_sml=1127680"
                      alt="Rectangle263227"
                      
                    />
                  </div>
                  <div className={styles.imgsection2}>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb9db786-6755-44ec-ab79-a17b78b5a869/42123934-d62d-4cf8-a0f9-8401284bc7e2?org_if_sml=1107937"
                      alt="Rectangle293230"
                      
                    />
                  </div>
                </div>

                <div className="attractions-frame64">
                  <div className={styles.imgsection2}>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb9db786-6755-44ec-ab79-a17b78b5a869/95d716a8-8e88-4a2f-98e4-84c582ff6047?org_if_sml=1135290"
                      alt="Rectangle283229"
                      
                    />
                  </div>
                  <div className={styles.imgsection2}>
                    <img
                      src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fb9db786-6755-44ec-ab79-a17b78b5a869/48aaf882-7b49-4f12-aa8d-91dc20692900?org_if_sml=1156318"
                      alt="Rectangle303231"
                      
                    />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </Fragment>
  );
};
