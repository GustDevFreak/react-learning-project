function profile() {
  const user = {
    name: 'Carl Johnson',
    alias: 'Ciyei',
    imageUrl: 'https://i.pinimg.com/236x/4e/21/66/4e2166ecc3c3c87f3b2e66380ec29745.jpg',
  };
  return (
    <>
    {/* aplicando concatenacion dentro de las llaves */}
      <h1>{'Nombre: ' + user.name}</h1>
      <h1>{'Apodo: ' + user.alias}</h1>
      <img
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
      />
    </>
  )
}

export default profile