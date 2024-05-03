import { myName, myAge } from "./newApp.test";

export default function MyApp() {
  return (
    <div>
      <p>Hello, my name is {myName()}</p>
      <p>I am {myAge()} years old</p>
    </div>
  );
}
