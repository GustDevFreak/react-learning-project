import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const HomeScreen = () => {

  const {user, country, currency} = useContext(UserContext)

  return (
    <>
      <div>HomeScreen</div>
      <ul>
        <li><b>Name: </b>{user.name}</li>
        <li><b>Tecnology: </b>{user.technology}</li>
        <li><b>Email: </b>{user.email}</li>
        <li><b>Country: </b>{country}</li>
        <li><b>Currency: </b>{currency}</li>
      </ul>
    </>
  )
}
