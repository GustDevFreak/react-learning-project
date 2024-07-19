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
    { id: 0, name: "Kevin", seen: true },
    { id: 1, name: "Gustavo", seen: true },
    { id: 2, name: "Julian", seen: false },
    { id: 3, name: "Alberto", seen: false }
  ]

  const [arrayDevelopers, setArrayDevelopers] = useState(listDevelopers)

  const onAddNewDeveloper = (val) => {
    if (val < 1) return // Para validar que ingrese al menos 1 valor.
    const newDeveloper = {
      id: arrayDevelopers.length,
      name: val.trim(),
      seen: true
    }
    setArrayDevelopers([...arrayDevelopers, newDeveloper])
  }

  return (
    <>
      <h1>List of developers</h1>
      <AgregarTarea addNewDeveloper={onAddNewDeveloper} />
      <br></br><br></br>
      {arrayDevelopers.map(item => <Items key={item.id} name={item.name} seen={item.seen}></Items>)}
    </>
  )
}

export default App;