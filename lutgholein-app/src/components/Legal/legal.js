import React from "react";
import logo from '../../img/logo1.png';
import { Link } from "react-router-dom";
import "./legal.css"

const Legal = () => {
    return (
        <div className="legal">
            <header className="legalHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo" alt="logo"/>
                        <div className='textoBienvenida'>
                            <div className='nombreMarca'>Lut Gholein</div>
                            <p>Reglas - Términos y Condiciones</p>
                            <p className='termsConds'> <p>📜 REGLAS DEL REINO – El Juramento del Aventurero ⚖️</p>

<p>Antes de que tu espada se desenvaina o tu conjuro se pronuncie, debes jurar lealtad a las leyes antiguas.
No son muchas… pero están escritas en piedra y fuego.</p>

<p>🛡️ Respeto absoluto</p>

<p>Este reino acoge a todo aquel que llegue con intención noble. No se tolerarán:

Discriminación de ningún tipo (género, raza, orientación, religión, etc.)

Insultos personales o actitudes hostiles hacia otros jugadores.

Comportamientos tóxicos, manipulativos o abusivos.

👉 El roleo puede ser intenso o sombrío, pero el respeto entre personas es inquebrantable.</p>

<p>📚 Mantén la narrativa, conoce el límite</p>

<p>Si estás en canales de roleo (#Mesa de Juego, #Roleo, etc.), escribe en personaje.

Para bromas o charlas fuera de personaje, usá los canales apropiados (#charla general, #off-topic).

Si necesitás hacer un comentario OOC (fuera de personaje) en medio del roleo, usá paréntesis: (OOC: buen turno!)

⚠️ Evitá mezclar el jugador con el personaje. Las decisiones de un personaje no reflejan la intención real de su jugador.</p>

<p>🎲 Juega limpio</p>

<p>No se permiten tiradas manipuladas ni trampas con fichas o decisiones.

Todos los dados deben tirarse usando el Foundry oficial del servidor o en presencia del DM.

El meta-gaming (usar info que tu personaje no sabe) y el power-gaming (jugar solo para ganar) están prohibidos.</p>

<p>🧙 Respeta al DM como a un dios menor</p>

<p>El DM no es un enemigo ni un juez cruel: es el tejedor de este mundo.

Las decisiones del DM en partida son finales. Si hay desacuerdos, se habla por privado con respeto.

Si vos sos DM: sé justo, creativo y coherente. El poder viene con responsabilidad.</p>

<p>🏰 Organización y orden</p>

<p>Usá los canales correspondientes para cada tipo de mensaje.

No hagas spam, ni repitas mensajes, ni interrumpas sesiones activas.

Las menciones masivas (@everone, @hre) están reservadas para anuncios importantes y solo las usa el staff.</p>

<p>🔮 Contenido sensible</p>

<p>D&D puede explorar temas oscuros, pero no se permite contenido ofensivo, explícito o inapropiado fuera de contexto.

Evitá temas que puedan resultar triggering sin una justificación narrativa fuerte y consensuada con el grupo.</p>

<p>⚔️ El castigo de los dioses</p>

<p>El incumplimiento de estas reglas puede resultar en:

Advertencias

Silencios temporales

Expulsión del reino

El Consejo del Staff vigila desde las sombras.</p>

<p>👁️ Al permanecer en este servidor, aceptás estas reglas.
Que los dados te bendigan… o te condenen.</p>
</p>
                        </div>   
                    <Link className="CTAButton" to="/home">Acepto el juramento</Link>
                </div>

            </header>
        </div>
    )
};

export default Legal