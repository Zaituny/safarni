import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
} from "../../widgets";
import { Layout } from "../../layouts";
import styles from "./CarRental.module.scss";
import {Options, InputForm2} from "../../widgets"
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
              <Options/>
              <InputForm2/>
              <div className={styles.font}>
                <h2>Top Rented</h2>
              </div>
              <div className={styles.imgsection}>
                <div>
                  <img src={'https://s3-alpha-sig.figma.com/img/e19c/0791/f54118fb95297f7d11dfc7acca005a0c?Expires=1672617600&Signature=QXtC6kZtdHfUfIRGT7lQ8pt3CNS0yy-MKbT7NgFsYEJR8t4KA7y8SOts9aRTCa03e92pvoM~CddVnjwP8CjF1c-gM8lRNyHdOgNKCc8HuT-kwrrXo1KeMc26H89JZ4zHoM9pEKT7QrK563vXj~EmNozqfU84RlRMmpyvMSKXZxDke0hUuD~T~VPP6418Atue~i-qmQeTyxAdQV8TtlIFfehOQj08b56x3sCIBKX2juJ7vl4Sr9aiVG-PZODtMbIOw70XpbkeHLuuwNJQ1P7pOPFTOsZ2MnSDuJVArPCllSLi4uwSLYIOxejPjHt6wDiX-WZeHMiqcvvrzBNptHW2XA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} className={styles.car}/>
                  <span className={styles.cartext1}>
                    <span>Lamborghini Huracan</span>
                  </span>
                </div>
                <div>
                  <img src={'https://s3-alpha-sig.figma.com/img/3f82/bcbe/9d486e1936031068a9a581ba9301e77a?Expires=1672617600&Signature=d8K5yRuQGG5pf~lzgmirFShdkFNrqjXu61oMpbWduNpnOAbhRsdCC6XorDzAT-YnsMWxCHQZAKi0nW9u8iEdqnL0xMi58PxhnZAitLYqLJwjRVsLn-11Yq~WwPukklVKUkPq9-i17av6Eub6LWCVrh8WnYznTdu7Fz6NRvsZd4F~181Fxg1nrbOJ5N9uodgFiLvP4epIGhxSxqlRAjcVAmQEWyvIL8Vyyq23IikxPnAn6SXL~KshOn8CnCsy4Bxp~CxGAi2Q390Z6fXxfntpHA-RpxU8qqnq4yMIErYUzO2iENW1DB7AbYAmrLA3WibJMlHt0vej1IdKlVqU5HKjSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} className={styles.car}/>
                  <span className={styles.cartext2}>
                    <span>Porsche 918 Spyder</span>
                  </span>
                </div>
                <div>
                  <img src={'https://s3-alpha-sig.figma.com/img/e635/f5a1/94720b681375ea3210f2b5187fa27ea9?Expires=1672617600&Signature=GOO9MHmlhkBBqLS5H4rssn46bVTPw~qaAQBABsc2JFz47jcvlTkjtxGyjPoXc6L~hxsLgIAw7cuUT5WRJqexb6UOmlcQIUo~nSuoXHEeakrSqx-JybJiM9CZkHcxgKZqDZzg8rs0n36iuqBOg4NZqhw4bPwIT5CqS6lidxLWRsKZAQOhfVp4hAXMD7P6fLCVFAd4i2vcg~EmCcqEx8t70GtfdxjuawSjlwwJ3kMKbNC7R-amv566g-XJ0ERt5TPoJBUhrnFt-z~NnjWkuje4vK4Nc5VkQG~xqGv~UwTWmQ705WDEvr-fT3W90Y1cMNygXRFPESiY8AANk6LylR9T4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} className={styles.car}/>
                  <span className={styles.cartext3}>
                    <span>BMW i8 Coupe</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </Fragment>
  );
};
