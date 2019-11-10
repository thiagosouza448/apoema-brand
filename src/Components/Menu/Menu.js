import React, { Component } from "react";
import "./style.css";
import "../../App.css";

class Menu extends Component {
  render() {
    return (
        <div className="conteudoMenu wrapper ">
        
          <ul>
            <li>
              <a href="#teste">A MARCA</a>
            </li>
            <li>
              <a href="#teste">COLEÇÕES</a>
            </li>
            <li>
              <a href="#teste">SOBRE</a>
            </li>
            <li>
              <a href="#teste">CONTATO</a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Menu;
