import { useState } from "react";
import { UserList } from "./components/userList";

export const UsersApp = () => {

  const [endPoint, setEndPoint] = useState('users')

  const handleFetch = () => {
    setEndPoint('comments')
  }

  return (
    <>
      <h1>Lista de usuarios:</h1>
      <UserList endpoint={endPoint}></UserList>
      <button onClick={handleFetch}>Click for Comments</button>
    </>
  )
}

export default UsersApp;