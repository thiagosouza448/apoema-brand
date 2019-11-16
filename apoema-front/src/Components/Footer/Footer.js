import React, { Component } from 'react';
import './style.css'
import Instagram from './imagem/instagram.png'

const redeSocial = (props) =>{

    return(

        <div className="redesociais">

            <img src={props.Instagram}></img>


        </div>


    );



}


class Footer extends Component {

    render() {
        return (
         
            <redeSocial />
     
        );
    }


}


export default Footer;