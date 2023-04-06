import React from "react";
import '../style/BotonClear.css'

const BotonClear = (props) => (
    <div 
        className="boton-clear"
        onClick={props.manejarClear}> {/*EventListener que activa la función manejarClear cuando se hace click*/}
            {props.children}
    </div>
);

export default BotonClear;