import React, { Component } from "react";
import "./style.css";
import "../../App.css";
// import $ from "jquery";
import { Link } from "react-router-dom";

// $(function() {
//   $('Link[to*="#"]:not([to="#"])').click(function(e) {
//     e.preventDefault();

//     var target = $(this.hash);

//     if (target.length) {
//       $("html, body").animate({ scrollTop: target.offset().top }, 1000);
//       return false;
//     }
//   });
// });

class Menu extends Component {
  render() {
    return (
      <div className="conteudoMenu wrapper ">
        <ul>
          <li>
            <Link to="/">
            INICIO
            </Link>
          </li>
          <li>
            <Link to="/colecoes">
           COLEÇÕES
            </Link>
          </li>
          <li>
            <Link to="/sobre/">
           SOBRE
            </Link>
          </li>

          <li>
            <Link to="/contato/">
             CONTATO
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
