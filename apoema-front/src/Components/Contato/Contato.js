import React, { Component } from "react";
import "./style.css";

import Logo from "../../assets/apoema2.png";

class Contato extends Component {
  render() {
    return (
      <div className="contato-Form">
        <img alt="logotipo" className="LogoContato" src={Logo}></img>
        <form>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="text" name="Email" />
          </label>
          <label>
            Mensagem:
            <input id="MensagemContato" type="text" name="name" />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contato;
