import React from "react";
import Slider from "react-slick";
import Vitrine1 from "../../assets/2019_apoema_FMZT0097.jpg";


import './style.css'

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
      <Slider {...settings}>
      
        <div className="vitrine-item">
          <img alt="vitrine" src={Vitrine1}></img>
        </div>
        <div className="vitrine-item">
          <img alt="vitrine" src={Vitrine1}></img>
        </div>
        <div className="vitrine-item">
          <img alt="vitrine" src={Vitrine1}></img>
        </div>
        <div className="vitrine-item">
          <img alt="vitrine" src={Vitrine1}></img>
        </div>
        <div className="vitrine-item">
          <img alt="vitrine" src={Vitrine1}></img>
        </div>
      </Slider>
      </div>

      
    );
  }
}

export default Vitrine;
