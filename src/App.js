import { useState } from "react";

function MyApp() {
  return (
    <>
    <h1>El mismo componente, pero con estados independiente</h1>
    <p>Esto quiere decir que con react se puede usar el mismo componente, y cada uno obtendrá su propio estado.</p>
    <div>
      <h2>Button 1</h2>
      <MyButton />
    </div>
    <div>
      <h2>Button 2</h2>
      <MyButton />
    </div>
    </>
  );
}

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
export default MyApp