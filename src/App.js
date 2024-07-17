const String = 'String'
const boolean = true
const array = [1, 'array', true]
const functionTest = () => 'function'
const objectTest = { clave: 'object' }
const date = new Date()

function App() {

  return (
    <>
      <h1>{String}</h1>

      <h2>React no renderiza un booleano {boolean}</h2>

      <h3>{array[1]}</h3>

      <h4>{functionTest()}</h4>
      
      <h5>{JSON.stringify(objectTest['clave'])}</h5>

      <h6>{JSON.stringify(date)}</h6>
    </>
  )
}

export default App;