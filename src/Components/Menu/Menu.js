import React, { Component } from "react";
import "./style.css";
import "../../App.css";

class Menu extends Component {
  render() {
    return (
        <div className="conteudoMenu wrapper ">
        
          <ul>
            <li>
              <a href="">A MARCA</a>
            </li>
            <li>
              <a href="">COLEÇÕES</a>
            </li>
            <li>
              <a href="">SOBRE</a>
            </li>
            <li>
              <a href="">CONTATO</a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Menu;
