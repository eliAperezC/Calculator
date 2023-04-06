import React from "react";
import '../style/Pantalla.css'

// Definiendo el componente como función de flecha
const Pantalla = ({ input }) => (
    <div className="input">
        { input }
    </div>
);

export default Pantalla;