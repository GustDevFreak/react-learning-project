function MyButton() {
  return (
    <button>Don't touch me</button>
  );
}

export default function MyApp() { //Solo puede haber un archivo de exportacion.
  return (
    <div>
      <h1>Welcome to the jungle</h1>
      <MyButton />
    </div>
  );
}