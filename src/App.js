function profile() {
  const currentYear = 2025;
  // El operador ternario se puede usar dentro de la estructura JSX, asi se evita el IF tradicional.
  return (
    <>
      {
        currentYear === 2024 ? ('Es el año 2024') : ('Es otro año')
      }
    </>
  )
}

export default profile