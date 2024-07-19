import { useState } from "react"

const Items = ({ name, seen }) => {
  return (
    <>
      <li>{name} {seen ? '✅ (Accepted)' : '⛔ (Refused)'}</li>
      {/* Tambien se puede usar && para mostrar algo solo si es verdadero. */}
      <ul><b>{seen && ' -> Developer with experiencia'}</b></ul>
    </>

  )
}

function App() {

  const addNew = () => {
    
    // using spread operator "...arrayDevelopers"
    setArrayDevelopers([...arrayDevelopers, {id: 5, name : "Mauricio", seen : false}])
  }

  let listDevelopers = [
    { id : 1, name : "Kevin" , seen : true },
    { id : 2, name : "Gustavo" , seen : true },
    { id : 3, name : "Julian" , seen : false },
    { id : 4, name : "Alberto" , seen : false }
  ]

  const [arrayDevelopers, setArrayDevelopers] = useState(listDevelopers)

  return (
    <>
      <h1>List of developers</h1>
      {arrayDevelopers.map(item => <Items key={item.id} name={item.name} seen={item.seen}></Items>)}

      <button onClick={() => addNew()}>Agregar new</button>
    </>
  )
}

export default App;