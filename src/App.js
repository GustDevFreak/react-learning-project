import {useCounter} from './hooks/useCounter';

export default App => {

  const {counter, increment, reset, decrement} = useCounter(0);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button className="btn btn-success m-2" onClick={() => increment(1)}>+</button>
      <button className="btn btn-danger m-2" onClick={() => reset()}>Reset</button>
      <button className="btn btn-success m-2" onClick={() => decrement(1)}>-</button>
    </div>
  );
}