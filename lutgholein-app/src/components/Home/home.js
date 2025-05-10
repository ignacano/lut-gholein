import React from "react";
import logo from '../../img/logo1.png';
import arrowDown from '../../img/arrowDown.png';
import { Link } from "react-router-dom";
import './home.css'

const Home = () => {
    return(
        <div className="home">
            <header className="homeHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo-home" alt="logo"/>
                        <div className='textoBienvenida'>
                            <p><div className='nombreMarca'><h1 className="textoMarca">LUT GHOLEIN</h1></div></p> 
                            <p className="descripcionServicio">En el corazón ardiente del desierto, donde las dunas esconden secretos ancestrales y el eco de antiguas leyendas aún resuena en las piedras, se alza Lut Gholein: nuestro bastión, nuestro punto de partida, nuestro hogar digital. 
                                Aquí convergen aventureros de todos los rincones, unidos por el fuego del juego, la camaradería y el deseo de explorar mundos sin límites. Esta no es solo una web. Es una ciudad refugio. Un mapa hacia nuestros servidores. Un portal hacia cada historia que estamos por escribir. 
                                Has llegado al oasis de la comunidad. Prepárate. Lo mejor está por comenzar. 
                                <p className="resaltarEnunciado">ADELANTE, MORTAL: Elige dónde se derramará tu sangre:</p></p>
                          
                        </div>  
                    <Link className="botonServer" to="/#">Foundry - Dungeon & Dragons</Link>
                    <Link className="botonServer" to="/#">Counter Strike 1.6</Link>
                </div>
            </header>
        </div>
    )
};

export default Home;

