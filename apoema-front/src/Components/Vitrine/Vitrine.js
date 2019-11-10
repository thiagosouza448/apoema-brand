import React from "react";
import Slider from "react-slick";
import Look1 from './VitrineImagem/look 5/2019_apoema_FMZT0136.jpg';
import Look2 from './VitrineImagem/look 3/2019_apoema_FMZT9751.jpg';
import Look3 from './VitrineImagem/look 2/2019_apoema_FMZT9353.jpg';
import Look4 from './VitrineImagem/look 4/2019_apoema_FMZT9504.jpg';
import Look5 from './VitrineImagem/look 1/2019_apoema_FMZT9079.jpg';







import "./style.css";

class Vitrine extends React.Component {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className="ContentVitrine">
        <h3> APOEMA A CULTURA PARAENSE</h3>

        <Slider {...settings}>
        <a href="google.com">
          <div className="vitrine-item">
            <div>
              <img alt="vitrine" src={Look1}></img>
              <h4>COMPRAR</h4>
            </div>
          </div>
          </a>


          <a href="google.com">
          <div className="vitrine-item">
            <div>
              <img alt="vitrine" src={Look2}></img>
              <h4>COMPRAR</h4>
            </div>
          </div>
          </a>

          <a href="google.com">
          <div className="vitrine-item">
            <div>
              <img alt="vitrine" src={Look3}></img>
              <h4>COMPRAR</h4>
            </div>
          </div>
          </a>

            <a href="google.com">
          <div className="vitrine-item">
            <div>
              <img alt="vitrine" src={Look4}></img>
              <h4>COMPRAR</h4>
            </div>
          </div>
          </a>

          <a href="google.com">
          <div className="vitrine-item">
            <div>
              <img alt="vitrine" src={Look5}></img>
              <h4>COMPRAR</h4>
            </div>
          </div>
          </a>
        </Slider>
      </div>
    );
  }
}

export default Vitrine;

