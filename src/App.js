import { useState } from "react";

// declarando una variable de estado dentro del componente
function MyButton() {
  
  // [estado actual, funcion que actualizara el estado]
  const [count, setCount] = useState(0);

  // defino el controlado de eventos
  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

// Ahora ejecuto el componente
export default MyButton