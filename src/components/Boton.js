import React from "react";
import '../style/Boton.css'

function Boton(props) {

    // Función que indica si el caracter es un operador o no
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}
            onClick={() => props.manejarClick(props.children)}> {/*EventListener con función anónima*/}
            {props.children}
        </div>
    );
}

export default Boton;