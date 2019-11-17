import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";


import Instagram from "./imagem/instagram.png";
import FaceBook from "./imagem/facebook.png";
import Email from "./imagem/email.png";


const Navigation = () => {
    return (
        <div className="Navigation">
            <ul>
               <Link to="/colecoes"><li>Coleções</li></Link>
                <li>A marca</li>
                <li>Sobre </li>
                <Link to="/contato"><li>Contato</li></Link>
            </ul>
        </div>
    );
};


const Sobre = () =>{

    return(
        <div className="textFooter">
            <h3>Sobre a marca</h3>

            <p>A <b>APOEMA</b> surgiu de um desejo de celebrar a cultura regional brasilieira, olhar cada detalhe da identidade luminosa e repleta de adversidades e agindo sempre com equilíbrio.<br></br>
            Nas suas coleções procura trazer em tema as raízes brasileiras, ligando com o comtemporâneo e uma personalidade que estampa o espírito do tempo.<br></br>
            As modelagens, supreposições, texturas, contrastes de cores, estamparia e técnicas manuais.
            
              </p>         
        </div>
           
    );
}



const RedesSociais = () => {
    return (
        <div className="RedesSociais">
           

           <form>
               <label>
               <h3>Newsletter</h3>
                    <input placeholder="Digite seu email">
                    </input>

                    <button type="submit" id="submitNewsletter">Enviar</button>
               </label>
           </form>

            <h3>Redes Sociais</h3>
            <div>
            <a  href="https://www.instagram.com/_apoema/"><img alt="Instagram" width="40px" src={Instagram}></img></a>
            <img alt="facebook" width="40px" src={FaceBook}></img>
           <Link to="/contato"> <img alt="Email" width="40px" src={Email}></img></Link>
            </div>


        </div>
    );
};

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Navigation />
                <Sobre />
                <RedesSociais />
            </div>
        );
    }
}

export default Footer;
