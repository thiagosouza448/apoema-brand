import React from "react";
import Vitrine from '../../Components/Vitrine/Vitrine'


import '../../App.css';
import '..//..//Components/Vitrine/style.css'
import look05 from '../../Components/Vitrine/VitrineImagem/look05/look05.png';



function Amarelo() {
  return (
    <div className="Product">
      <img className="productImg" src={look05}></img>


      <Vitrine />
    </div>
  );
}

export default Amarelo;
