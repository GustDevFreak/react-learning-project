import React, { useState } from 'react'
import { UserContext } from './UserContext'

// recibe los childrens
export const UserProvider = ({children}) => {

    const [user, setUser] = useState({})

  return (
    // Pasando setUser como propiedad para poder usarla en los childrens
    <UserContext.Provider value={{user, country: 'Bolivia', currency: 'BOB', setUser}}>
        {/* Aqui se despliegan los childrens y con el provider le vamos a proveeder a los children alguna informacion*/}
        {children}
    </UserContext.Provider>
  )
}
