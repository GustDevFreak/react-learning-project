import { useState } from "react"
import { AgregarTarea } from "./components/AgregarTarea"

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

  let listDevelopers = [
    { id : 1, name : "Kevin" , seen : true },
    { id : 2, name : "Gustavo" , seen : true },
    { id : 3, name : "Julian" , seen : false },
    { id : 4, name : "Alberto" , seen : false }
  ]

  const [arrayDevelopers] = useState(listDevelopers)

  return (
    <>
      <h1>List of developers</h1>
      <AgregarTarea />
      <br></br><br></br>
      {arrayDevelopers.map(item => <Items key={item.id} name={item.name} seen={item.seen}></Items>)}
    </>
  )
}

export default App;