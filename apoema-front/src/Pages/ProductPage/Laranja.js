import React from "react";
import Vitrine from '../../Components/Vitrine/Vitrine'

import '../../App.css';
import '..//..//Components/Vitrine/style.css'
import look01 from '../../Components/Vitrine/VitrineImagem/look01/look-01.png';



function Laranja() {
  return (
    <div className="Product">
      <img  className="productImg" src={look01}></img>

      <Vitrine />
    </div>
  );
}

export default Laranja;
