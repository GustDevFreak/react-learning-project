import { useFetchData } from "./hooks/useFetchUsers"

export const UserList = ({ endpoint }) => {

    const { data, isLoading } = useFetchData(endpoint)

    return (
        <>
            <ul>
                {isLoading
                    ? <li>Cargando...</li>
                    : endpoint === 'users'
                        ? data.map(item => <li key={item.id}>{item.name}</li>)
                        : data.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </>
    )
}
