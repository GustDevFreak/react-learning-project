import operationSum from "./newApp.test"; //Ahora el nombre de importacion es obligatorio que sea igual al componente original

export default function MyApp() {
  return (
    <div>
      <p>La suma de 2 + 5 es {operationSum(2,5)}</p>
    </div>
  );
}
