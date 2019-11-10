import React, { Component } from "react";
import "./style.css";
import Logo from '../../assets/apoema.png'

class Bottoms extends Component {
  render() {
    return (
      <div className="SectionBottom">
        <div className="itemBottom">
         <div> <img alt="Apoema Sobre" src={Logo}></img></div>
          <h3>A marca</h3>
          <p>
            Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar,
            então é... é... Já vivi muito sem dinheiro, já vivi muito com
            dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a
            senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?
          </p>
        </div>
        <div className="itemBottom">
        <div> <img alt="Apoema Sobre" src={Logo}></img></div>
          <h3>Coleções</h3>
          <p>
            Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar,
            então é... é... Já vivi muito sem dinheiro, já vivi muito com
            dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a
            senhora ganha R$10 mil por mês. -
          </p>
        </div>
        <div className="itemBottom">
        <div> <img alt="Apoema Sobre" src={Logo}></img></div>
          <h3>Estamparia</h3>
          <p>
            Eu dou dinheiro pra minha filha. Eu dou dinheiro pra ela viajar,
            então é... é... Já vivi muito sem dinheiro, já vivi muito com
            dinheiro. -Jornalista: Coloca esse dinheiro na poupança que a
            senhora ganha R$10 mil por mês. -Dilma: O que que é R$10 mil?
          </p>
        </div>
      </div>
    );
  }
}

export default Bottoms;
