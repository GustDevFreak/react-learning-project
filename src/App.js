function sayHelloWordWithStyleCss() {
  const user = {
    imageUrl: "https://images7.memedroid.com/images/UPLOADED645/6201803e9abd9.jpeg"
  };
  return (
    <h1>
      {/* Aqui usamos comillas para el parametro className del JSX -> p, cuando es texto */}
      <p className="red-text">Hello Bro !!!</p> 
      {/* Aqui usamos llaves para el parametro src del JSX -> img, cuando es una variable JS */}
      <img src={user.imageUrl} alt=""></img>
    </h1>
  )
}

export default sayHelloWordWithStyleCss