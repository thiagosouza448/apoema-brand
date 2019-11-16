import React from "react";
import Vitrine from '../../Components/Vitrine/Vitrine'

import '../../App.css';
import '..//..//Components/Vitrine/style.css'
import look04 from '../../Components/Vitrine/VitrineImagem/look04/look04.png';



function Estampa() {
  return (
    <div className="Product">
      <img className="productImg" src={look04}></img>


      <Vitrine/>
    </div>
  );
}

export default Estampa;
