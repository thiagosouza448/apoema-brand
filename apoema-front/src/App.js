import React from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Footer from './Components/Footer/Footer';
import HomePage from "./Pages/Home";
import ContatoPage from "./Pages/ContatoPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/colecoes/" component={HomePage}></Route>
          <Route path="/sobre/" component={HomePage}></Route>
          <Route path="/contato/" component={ContatoPage}></Route>
        </Switch>
        < Footer />
      </div>
    </Router>
  );
}

export default App;
