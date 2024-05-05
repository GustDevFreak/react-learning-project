import { Message } from "./message.test";

function getYear() {
  const currentYear = 2024;

  return (
    <>
      {
        currentYear === 2024 && <Message />
      }
    </>
  )
}

export default getYear