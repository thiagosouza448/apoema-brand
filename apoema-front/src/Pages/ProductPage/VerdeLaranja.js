import React from "react";
import Vitrine from '../../Components/Vitrine/Vitrine'

import '..//..//App.css';
import '..//..//Components/Vitrine/style.css'
import look02 from '../../Components/Vitrine/VitrineImagem/look02/look02.png';


function VerdeLaranja() {
  return (
    <div className="Product">
      <img className="productImg" src={look02}></img>

      <Vitrine />
    </div>
  );
}

export default VerdeLaranja;
