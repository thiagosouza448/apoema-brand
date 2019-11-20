import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import look05 from "../../Components/Vitrine/VitrineImagem/look05/look05.png";

import Vitrine from "../../Components/Vitrine/Vitrine";

import Logo from "..//..//assets/apoema2.png";
import "../../App.css";
import "..//..//Components/Vitrine/style.css";


class Amarelo extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 4500
    };
    return (
      <div className="contentProd">
        <div className="Logo">
          <img alt="Logo" src={Logo}></img>
        </div>

        <div className="ProductVitrine">
          <div id="ImagemVitrine" className="">
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div className="bnd-item" key={1}>
                <img alt="Look05" src={look05}></img>
              </div>
              <div className="bnd-item" key={2}>
                <img alt="Look05-2" src={look05}></img>
              </div>
            </Slider>

            <div
              className="prev-and-next-product"
              style={{ textAlign: "center" }}
            >
              <button className="button" onClick={this.previous}>
                <svg className="flickity-button-icon" viewBox="0 0 100 100">
                  <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    className="arrow"
                  ></path>
                </svg>
              </button>
              <button className="button" onClick={this.next}>
                <svg className="flickity-button-icon" viewBox="0 0 100 100">
                  <path
                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                    className="arrow"
                    transform="translate(100, 100) rotate(180) "
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="TextProd">
          <div className="menuNav">
              <Link to="/">I N I C I O</Link> &nbsp;/ &nbsp;
              <Link to="/colecoes"> C O L E Ç Õ E S </Link>&nbsp; / &nbsp; L O O K - TAPEREBA
            </div>
            <h1>Look Taberebá</h1>

            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
            

            <h2>R$: 399,90</h2>
          

            <p id="estoque">Estoque (Disponível) </p>
            <a href="#comprar" className="btn btn-1">
              <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%" />
              </svg>
              Comprar
            </a>





            
          </div>
        </div>
        <Vitrine />
      </div>
    );
  }
}

export default Amarelo;
