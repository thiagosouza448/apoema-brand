import React from "react";
import Slider from "react-slick";

class Vitrine extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <Slider {...settings}>
        <div>
          <img></img>
        </div>
        <div>
          <img></img>
        </div>
       

      </Slider>
    );
  }
}


export default Vitrine;