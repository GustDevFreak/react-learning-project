import { useState } from "react";

// Componente padre
function MyApp() { 

  // Primero definimos el estado y el controlador de click en el componente padre
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
    <h1>El mismo componente, pero con estados dependientes, usando PROPS</h1>
    <p>Esto quiere decir que los mismos componentes ahora tendran el mismo estado.</p>
    <p>Como funciona?</p>
    <p>Desde el componente padre se pasa pasa el state y el handle como propiedad (PROPS) al componente hijo</p>
    <div>
      <h2>Button 1</h2>
      <MyButton count={count} onClick={handleClick} />
    </div>
    <div>
      <h2>Button 2</h2>
      <MyButton count={count} onClick={handleClick} />
    </div>
    </>
  );
}

// Componente hijo
function MyButton({count, onClick}) {

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

export default MyApp