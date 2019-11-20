import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Bottom from "./Components/Bottoms/Bottoms";

import HomePage from "./Pages/Home";
import ContatoPage from "./Pages/ContatoPage";
// import $ from "jquery";  

// looks
import look01 from "./Pages/ProductPage/Laranja";
import look02 from "./Pages/ProductPage/VerdeLaranja";
import look03 from "./Pages/ProductPage/Macacao";
import look04 from "./Pages/ProductPage/Estampa";
import look05 from "./Pages/ProductPage/Amarelo";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Pages/Home";
import Vitrine from "./Components/Vitrine/Vitrine";

function App() {



  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/colecoes/" component={Vitrine } ></Route>
          <Route path="/sobre/" component={Bottom}></Route>
          <Route path="/contato/" component={ContatoPage}></Route>
        </Switch>

        <Switch>
          {/* LOOOKS */}
          <Route path="/look01" component={look01}></Route>
          <Route path="/look02" component={look02}></Route>
          <Route path="/look03" component={look03}></Route>
          <Route path="/look04" component={look04}></Route>
          <Route path="/look05" component={look05}></Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
  
}

export default App;
