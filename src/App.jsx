import React, { useEffect, Fragment } from "react";
import { Routes, Route, Navigate  } from "react-router-dom";

import {
  Home,
  Search,
  Login,
  Stays,
  CarRental,
  SignUp,
  Attractions,
  CarSearch,
  HotelSearch
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
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/stays" exact element={<Stays/>} />
          <Route path="/car-rental" exact element={<CarRental/>} />
          <Route path="/sign-up" exact element={<SignUp/>} />
          <Route path="/attractions" exact element={<Attractions/>} />
          <Route path="/car-search" exact element={<CarSearch/>} />
          <Route path="/hotel-search" exact element={<HotelSearch/>} />
        </Routes>
        <Footer />
      </Fragment>
    );
  }

  return <Fragment>{app}</Fragment>;
};
