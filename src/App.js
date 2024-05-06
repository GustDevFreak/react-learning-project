export default function MyButton() {
  function handleClick() {
    alert('Hello World');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}