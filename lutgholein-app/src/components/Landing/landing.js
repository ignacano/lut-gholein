import React from "react";
import logo from '../../img/logo1.png';
import { Link } from "react-router-dom";
import "./landing.css"

const Landing = () => {
    return (
        <div className="landing">
            <header className="landingHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo" alt="logo"/>
                        <div className='textoBienvenida'>
                            <p>Bienvenidos a <div className='nombreMarca'><h1>Lut Gholein</h1></div></p> 
                            <p>La web exclusiva de la comunidad de Lut Gholein, donde podras acceder a servidores de D&D y Counter Strike 1.6</p>
                            <p className='knowMore'>¿A qué vamos a jugar hoy?</p>
                        </div>   
                    <Link className="CTAButton" to="/home">Foundry - Dungeon & Dragons</Link>
                    <Link className="CTAButton" to="/home">Counter Strike 1.6</Link>
                </div>
            </header>
        </div>
    )
};

export default Landing