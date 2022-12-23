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
                <div>
                  <img src={'https://s3-alpha-sig.figma.com/img/75b2/2a17/62b2d16126f53965cd1e1fcf2afe864e?Expires=1672617600&Signature=CLCha3FJlzWoHD50JDYPzaSEQcDVu7nyDd3coyoIYKHmQ9lkX7ktmm2T8yqAizI3pHuBCoyr42x0XVc6HUvwDjdXAm7cewxHQG89CnEDPevo9zfgw-aAKRrd8xzEOXgOHCRMAKfV00T32YC5mvExmWcSD645lOFLwYbDaJPuMMTjQv~iqA8b6nMn-KBf9b8fUbul3xTcpzxca9sog2QrMhDdzG-PSLctH3XlE3zw0xOnQ01sEQ7fyzCHfsAi36VIvvIblL5LgN4F7vRBfnaDWbOke9~u7BvcK0yWjyNXBnqxoVv9mGkISx~xQZmQgLMLq5xLLb5lRjI34lnB9jqgYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} className={styles.car}/>
                  <span className={styles.cartext1}>
                    <span>Dahab</span>
                  </span>
                </div>
                <div>
                  <img src={'https://s3-alpha-sig.figma.com/img/dff9/845e/2d904aa7645e93af8f24189743ace5ee?Expires=1672617600&Signature=AOIbBN~LxvKiNEIjCr2cJFBeBVEUc5Ooapg5gfuAF~H3ACj6-pO-GLRwDldUAIs2LuLhbJe~qO~HETqoIKSUFhC1t0f17T2AejhZCIALYyO5CnYulohY2bd2FgISJQdKCEvfMTiFKCwjjR0WUKI3m8B5K8vAxFrvMD0rzfTFhqkp4MYsBJ3ItPK47BUFm3ul5dyuK3XXVMF5WmZLerW65vWX7BIZ6GNsIkRPhGPAt3PI4nlSLBs01KdyjYF~hYLLGuSwmeHqeBHBq6sKeBNU9Wwn2DZ9hXhwxVIA3zJXG1q0K~Dhuj-bMsMc6o67QdHuFiNMePG1Jygu0XTaDp6XyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} className={styles.car}/>
                  <span className={styles.cartext2}>
                    <span>Sharm Elsheikh</span>
                  </span>
                </div>
                <div>
                  <img src={'https://s3-alpha-sig.figma.com/img/78bd/4241/f49e643c51cf7e49268d1e6fc39a1f53?Expires=1672617600&Signature=Sl8Jg71RTkdvBgb30W47a16DuTh-lEAkeTvanseqEda5Nz5gVJwxj20rlI34u1P0255zgjzvQyeiALl0C8bkUxTf27H6pr0NG8X074SHIGfUyxLL~eC~EFg-j5sBspHqJdHA2tY2iCBtgYYNzECaiVjstDjFabgcgwjqyaXRcPppxv3vtKzg3GtYh-HJaJjlhYGIOPMge1uWvxj0v8~K-VpQy23vcdEbYkSrb6bzdfp-Gd0MKgoLuuAekDZJUvxWtvRw5lIBpa1ct8z7XE8Avo8r7WF9xYKtztLe2tpvm6QeFsIGdG44ecIzv6mhxkBoaz4dFP3NVesbO~NZO5z31w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} className={styles.car}/>
                  <span className={styles.cartext3}>
                    <span>Alexandria</span>
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
