import React from "react";
import Vitrine from '../../Components/Vitrine/Vitrine'

import '../../App.css';
import '..//..//Components/Vitrine/style.css'
import look03 from '../../Components/Vitrine/VitrineImagem/look03/look03.png';


function Macacao() {
  return (
    <div className="Product">
      <img  className="productImg" src={look03}></img>

      <Vitrine/>
    </div>
  );
}

export default Macacao;
