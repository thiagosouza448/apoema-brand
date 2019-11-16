import React from "react";

import ".//..//App.css";
import Banner from "../Components/Banner/Banner";
import Thumb from "../Components/Thumb/Thumb";
import Bottoms from "../Components/Bottoms/Bottoms";
import Vitrine from "../Components/Vitrine/Vitrine";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Home";

function Home() {
  return (
    <div className="App">
      <Banner />
      <Vitrine />
      <Bottoms />
      <Thumb />
    </div>
  );
}

export default Home;
