import React, { useEffect, Fragment } from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import {
  Home,
  Search,
  Login,
  Stays,
  CarRental,
  SignUp,
  Attractions,
  CarSearch,
  HotelSearch,
  Cruises,
  Packages,
  CarReserve,
  HotelReserve,
  FlightReserve,
  AttractionReserve,
  AttractionSearch
} from "./components/pages";
import { Header, Sidebar, Footer } from "./components/layouts";
import { Spinner } from "./components/elements";
import { useCustomState } from "./state/state";

export default () => {
  const [state, actions] = useCustomState();

  useEffect(() => {
    actions.fetch();
  }, [actions]);

  let app = state.error ? <p>Can't load page</p> : <Spinner fluid />;

  if (state.data) {
    app = (
      <Fragment>
        <Sidebar data={state.data.menu} />
        <Header data={state.data.menu} />
        <Routes>  
          <Route path="/" exact element={<Home/>} />
          <Route path="/search" exact element={<Search/>} />
          <Route path="*" element={<Navigate to="/Login" />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/stays" exact element={<Stays/>} />
          <Route path="/car-rental" exact element={<CarRental/>} />
          <Route path="/sign-up" exact element={<SignUp/>} />
          <Route path="/attractions" exact element={<Attractions/>} />
          <Route path="/car-search" exact element={<CarSearch/>} />
          <Route path="/hotel-search" exact element={<HotelSearch/>} />
          <Route path="/cruises" exact element={<Cruises/>} />
          <Route path="/packages" exact element={<Packages/>} />
          <Route path="/car-reserve" exact element={<CarReserve/>} />
          <Route path="/hotel-reserve" exact element={<HotelReserve/>} />
          <Route path="/flight-reserve" exact element={<FlightReserve/>} />
          <Route path="/att-reserve" exact element={<AttractionReserve/>} />
          <Route path="/att-search" exact element={<AttractionSearch/>} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
