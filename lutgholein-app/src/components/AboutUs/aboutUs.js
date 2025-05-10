import React from "react";
import logo from '../../img/logo1.png';
import { Link } from "react-router-dom";
import "./aboutUs.css"
import imgAboutUs from '../../img/imgAboutUs.png'
import whatsApp from "../../img/media-icons/whatsApp.svg"   

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <header className="aboutUsHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo" alt="logo"/>
                        <div className='textoBienvenida'>
                            <div className='nombreMarca'>Lut Gholein</div>
                            <p>Nuestra historia</p>
                            <p className='aboutUsText'>Todo comenzó con unas cuantas charlas dispersas en un servidor de Discord. Comentarios al pasar, partidas compartidas, memes, estrategias... sin darnos cuenta, habíamos formado algo más que un grupo: habíamos despertado una comunidad. De aquellas primeras conversaciones nació una hermandad gamer, un refugio virtual donde cada uno traía su juego favorito bajo el brazo y la pasión por sumergirse en mundos distintos. Entre teclas, clicks y risas, empezamos a construir algo más grande. Así surgió esta web.
Un portal forjado con el único propósito de conectarnos mejor. Un punto de encuentro para ingresar a nuestros propios servidores, organizar nuestras sesiones, compartir recursos y seguir expandiendo ese universo que, sin querer, habíamos empezado a crear juntos. No somos solo jugadores. Somos exploradores de lo imposible, estrategas del caos, creadores de mundos. Y este sitio es nuestra base, nuestra fortaleza digital, nuestro grito de guerra hacia lo que viene.
Bienvenido a la comunidad. El juego apenas comienza. </p>
                        </div> 
                        <div className="imgContainer">
                        <img src={imgAboutUs} className="imgAboutUs" alt="aboutUs"/>  
                        </div>
                    <Link className="CTAButton" to="/home">Volver a Inicio</Link>
                </div>

            </header>
        </div>
    )
};

export default AboutUs