import React, { Component } from "react";
import "./style.css";
import Logo from '../../assets/apoema.png'

class Bottoms extends Component {
  render() {
    return (

<div  id="aMarca" >
    <h3>A MARCA</h3>
          <div  className="SectionBottom">

      
        <div className="itemBottom">
         <div> <img alt="Apoema Sobre" src={Logo}></img></div>
         <h3>A MARCA</h3>

          <p>
          A <b>APOEMA</b> surgiu de um desejo de celebrar a cultura regional brasilieira, olhar cada detalhe da identidade luminosa e repleta de adversidades e agindo sempre com equilíbrio.
Nas suas coleções procura trazer em tema as raízes brasileiras, ligando com o comtemporâneo e uma personalidade que estampa o espírito do tempo.
As modelagens, supreposições, texturas, contrastes de cores, estamparia e técnicas manuais.
          </p>
        </div>
        <div className="itemBottom">
        <div> <img alt="Apoema Sobre" src={Logo}></img></div>
          <h3>Coleções</h3>
          <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ


          </p>
        </div>
        <div className="itemBottom">
        <div> <img alt="Apoema Sobre" src={Logo}></img></div>
          <h3>Estamparia</h3>
          <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ


          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default Bottoms;
