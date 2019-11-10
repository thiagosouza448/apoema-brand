import React, { Component } from "react";
import './style.css';
import Thumb1  from '../../assets/2019_apoema_FMZT0097.jpg';
import Thumb2  from '../../assets/2019_apoema_FMZT0221.jpg';
import Thumb3  from '../../assets/2019_apoema_FMZT0310.jpg';


class Thumb extends Component {
  render() {
    return (
      <div className="SectionThumb">          
          <div className="contentThumb">
              <div><img alt="Imagem1" src={Thumb1}></img></div>
              <div><img alt="Imagem2" src={Thumb2}></img></div>
              <div><img alt="Imagem3" src={Thumb3}></img></div>
          </div>
      </div>
    );
  }
}


export default Thumb;
