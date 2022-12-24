import React, { Fragment } from "react";
import {
  Slider,
  ParallaxHeader,
  SortBy,
  SearchByCarBrand,
  CarCard
} from "../../widgets";
import { Layout } from "../../layouts";
import styles from "./CarSearch.module.scss";
import {Options, InputForm2, FilterCar} from "../../widgets"
import { Link } from "../../elements";

import { useCustomState } from "../../../state/state";

export default () => {
  const state = useCustomState()[0];

  return (
    <Fragment>
      <article >
        <Layout
          style={{
            background: " #d9d9d9",
            boxShadow:'none',
            marginTop:'130px',
            paddingBottom: '10rem',
          }}
          col="1"
          mode="dark"
        >
          <div className={styles.slide}>
            <div className={styles.intro}>
              <InputForm2/>
              <div style={{display:'flex', width:'100%', marginTop:'30px', flexDirection:'column'}}>
                <div className={styles.inputlist} style={{display:'flex', width:'100%', marginTop:'30px', justifyContent:'space-between'}}>
                  <SearchByCarBrand/>
                  <SortBy/>
                </div>
                <div className={styles.mainsection} style={{display:'flex', width:'100%', marginTop:'30px', justifyContent:'space-between'}}>
                  <FilterCar/>
                  <CarCard/>
                </div>
              </div>
              
            </div>
          </div>
        </Layout>
    </article>
    </Fragment>
  );
};
