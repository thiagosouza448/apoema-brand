import React, { Component } from "react";
import Slider from "react-slick";
import Banner1 from "../../assets/2019_FelipeMazzucatto_FMZT0302@2x.png";
import Banner2 from "..//..//assets/2019_FelipeMazzucatto_FMZT0262.png";

import Logo from "../../assets/apoema.png";
import "./style.css";

class Banner extends Component {
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
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 4500
        };
        return (

            <div id="Bnd" className="bnd">
                <Slider ref={c => (this.slider = c)} {...settings}>

                    <div className="bnd-item" key={1}>
                        <img alt="banner1" src={Banner1}></img>
                    </div>
                    <div className="bnd-item" key={2}>
                        <img alt="banner2" src={Banner2}></img>
                    </div>
                </Slider>
                <div className="logotipo">
                    <img alt="Logotipo" src={Logo}></img>
                </div>


                <div className="prev-and-next" style={{ textAlign: "center" }}>
                    <button className="button" onClick={this.previous}>
                        <svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow"></path></svg>
                    </button>
                    <button className="button" onClick={this.next}>
                        <svg className="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) ">
                        </path>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
export default Banner;
