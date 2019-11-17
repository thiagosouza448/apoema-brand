import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Looks
import Laranja from "./VitrineImagem/look01/look-01.png";
import VerdeLaranja from "./VitrineImagem/look02/look02.png";
import Macacao from "./VitrineImagem/look03/look03.png";
import Estampa from "./VitrineImagem/look04/look04.png";
import Amarelo from "./VitrineImagem/look05/look05.png";

import "./style.css";



class Vitrine extends Component {
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
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    return (
      <div id="ancorVitrine" className="ContentVitrine">
        <h3> APOEMA A CULTURA PARAENSE</h3>

        <Slider ref={c => (this.slider = c)} {...settings}>
          <Link to="/look01">
              <div className="vitrine-item">
                <div>
                  <img alt="vitrine" src={Laranja}></img>
                  <h4>COMPRAR</h4>
                </div>
              </div>
          </Link>

          <Link to="/look02">
              <div className="vitrine-item">
                <div>
                  <img alt="vitrine" src={VerdeLaranja}></img>
                  <h4>COMPRAR</h4>
                </div>
              </div>
          </Link>

          <Link to="/look03">
              <div className="vitrine-item">
                <div>
                  <img alt="vitrine" src={Macacao}></img>
                  <h4>COMPRAR</h4>
                </div>
              </div>
          </Link>

          <Link to="/look04">
              <div className="vitrine-item">
                <div>
                  <img alt="vitrine" src={Estampa}></img>
                  <h4>COMPRAR</h4>
                </div>
              </div>
          </Link>

          <Link to="/look05">
              <div className="vitrine-item">
                <div>
                  <img alt="vitrine" src={Amarelo}></img>
                  <h4>COMPRAR</h4>
                </div>
              </div>
          </Link>
        </Slider>

        <div className="prev-and-next-vitrine" style={{ textAlign: "center" }}>
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
    );
  }
}

export default Vitrine;
