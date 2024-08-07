import { useEffect, useState } from "react"

export const UserList = ({ endpoint }) => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            const data = await response.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    // Esto se ejecuta cada vez que cambia el endpoint.
    useEffect(() => {
        fetchData()
    }, [endpoint]) // esta es la dependencia

    return (
        <>
            <ul>
                {endpoint === 'users'
                    ? data.map(item => <li key={item.id}>{item.name}</li>)
                    : data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    )
}
