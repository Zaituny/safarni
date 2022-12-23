import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
} from "../../widgets";
import { Layout } from "../../layouts";
import styles from "./Stays.module.scss";
import {Options, InputForm} from "../../widgets"
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
              <Options s = "stays"/>
              <InputForm/>
              <div>
                <h1>Explore Top Desinations</h1>
              </div>
              <div className={styles.imgsection} style={{backgroundImage:'url(https://s3-alpha-sig.figma.com/img/a08f/f6e2/530a96d3b9754b3e17d2c83d4262f9ce?Expires=1672617600&Signature=a9GyMaifuq4I1CynjKHwvNQS14Afik71-bvhW0IULEpCvwjim5BfjFMX59nFQEkNlwlMpKXfic~hT3l2ecCiVWJc8EWMrYK~uODuaHX7xIRYz2lwpV4l75mnzIhmdEcnJsljU3t9Np5cH26HGSRoLkPaRIIh1~n6zTyumvGGVOGhzSVoCvgEVdrhyFDm0JNeeQZZIfcqh7o4ehQeES2JDLOsBDdOpEw64rbDPTQhdl-SR3gwj3a0ers8vaAQP9K7m8wGFd2KqwbNyFQkPVL3lykvnD4OSI8fyRGou3M5wraYhKLO0SDeSMMh8kJTkrjcm-T6Tyq-3kv8kiqq-E7Qqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)', width:'100%', height:'500px', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                <div align={"left | right | center | justify"}>
                  <h1>Top 2022 Trips</h1>
                </div>
                <Link hoverStyle={{background:'#1a4c3c', color:'#fff'}} className={styles.imgsection_btn} url="/about">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </Fragment>
  );
};
