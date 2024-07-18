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

  return (
    <>
      <h1>List of developers</h1>
      <Items name="Kevin" seen={true} />
      <Items name="Gustavo" seen={true} />
      <Items name="Julian" seen={false} />
      <Items name="Alberto" seen={false} />
    </>
  )
}

export default App;