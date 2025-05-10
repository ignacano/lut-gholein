import logo from '../../img/logo1.png';
import { Link } from "react-router-dom";
import "./aboutUs.css"
import imgAboutUs from '../../img/imgAboutUs.png'

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <header className="aboutUsHeader">
                    <div className="contact-section">
                                <form className="contact-form">
                                    <h2>Contactate con Lut Gholein</h2>
                                    <input type="text" placeholder="Nombre" />
                                    <input type="email" placeholder="Correo Electrónico" />
                                    <textarea placeholder="Mensaje" rows="4" />
                                    <button type="submit">Enviar</button>
                                </form>
                            </div>
               

            </header>
        </div>
    )
};

export default AboutUs