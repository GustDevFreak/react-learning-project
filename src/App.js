import { useState } from "react";

export default function Board() {
  // (1) Esto crea una matriz con 9 elementos 
  const [squares, setSquares] = useState(Array(9).fill(null));

  // (4) Se define la funcion para actualizar la matriz que contiene el estado de su placa
  function handleClick(i) {
    const nextSquares = squares.slice(); //esto copia el contenido de la matriz en una nueva matriz.
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  // (2) Ahora se pasa las PROP a cada uno del componente Square que se esta renderizando
  return (
    <>
      {/* (5) Usando funcion de flecha, una forma mas corta de definir funciones.*/}
      <p>El componente principal pasa props a los componentes secundarios para que se puedan mostrar correctamente. 
        Al hacer clic en el componente secundario ahora le pide al componente principal que actualice el estado de la placa. 
        Cuando cambia el estado, tanto del componente principal como todos los elementos secundarios se vuelven a renderizar automáticamente</p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// (3) Se prepara el componente Square para recibir el PROP
function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}