import React, { Component } from "react";
import "./style.css";
import "../../App.css";
import $ from 'jquery';




$(function() {
  $('a[href*="#"]:not([href="#"])').click(function(e) {
    e.preventDefault();

    var target = $(this.hash);

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 1000);
      return false;
    }

  });
});





class Menu extends Component {
 

  render()
   {
    return (
        <div className="conteudoMenu wrapper ">
        
          <ul>
            <li>
              <a href="#aMarca">A MARCA</a>
            </li>
            <li>
              <a href="#ancorContato">COLEÇÕES</a>
            </li>
            <li>
              <a href="#sobreAmarca">SOBRE</a>
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
