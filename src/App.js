import './App.css';
import Boton from './components/Boton'
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  // Función que concatena el valor del input con el siguiente
  const agregarInput = val => {
    setInput(input + val);
  };

  // Función que evalua matemáticamente los valores que se proporcionen
  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else{
      alert('Por favor ingrese primero algún número'); // Se ejecuta en caso de presione el botón "=" antes de cualquier otro
    }
    
  }

  return (
    <div className="App">

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          {/* Todo lo que se encuntra dentro de la etiqueta de componente se considera children */}
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}> {/*Función anónima que reestablece la pantalla*/}
            Clear
          </BotonClear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
