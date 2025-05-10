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
                            <p>Bienvenidos a <div className='nombreMarca'><p>LUT GHOLEIN</p></div></p> 
                            <p>La web exclusiva de la comunidad de Lut Gholein, donde podras acceder a servidores de D&D y Counter Strike 1.6</p>
                
                        </div>   
                    <Link className="botonIngresa" to="/home">¡Ingresa Ahora, Aventurero!</Link>
                </div>
            </header>
        </div>
    )
};

export default Landing