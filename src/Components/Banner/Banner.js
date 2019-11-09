import React, { Component } from "react";
import './style.css';
import Slider from "react-slick";

import Banner1 from '../../assets/2019_apoema_FMZT0259.jpg';
import Logo from '../../assets/apoema.png';

class Banner extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        };
        return (
            
            <div className="bnd">
            <Slider {...settings}>
                <div className="bnd-item">
                    <img src={Banner1}></img>
                </div >
                <div className="bnd-item">
                    <img src={Banner1}></img>
                </div>
                <div className="bnd-item">
                    <img src={Banner1}></img>
                </div>
                <div className="bnd-item">
                    <img src={Banner1}></img>
                </div>

                
               
            </Slider>
            <div className="logotipo">
                    <img src={Logo}>
                    </img>
                </div>
            </div>
        );
    }
}

export default Banner;
