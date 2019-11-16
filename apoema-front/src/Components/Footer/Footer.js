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
            <h3>Sobre</h3>

            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>         
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
            <img alt="Instagram" width="40px" src={Instagram}></img>
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
