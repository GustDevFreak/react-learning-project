function profile() {
  const currentYear = 2024;
  let message;
  // Cuando se usa el IF normal si o si se debe utilizar el condicional, fuera de la estructura JSX
  if (currentYear === 2024) {
    message = 'Es el año 2024';
  } else {
    message = 'Es otro año';
  }
  return (
    <>
      {message}
    </>
  )
}

export default profile