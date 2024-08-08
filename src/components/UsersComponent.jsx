import { useEffect, useRef } from 'react';
import { useFetchUsers } from '../hooks/useFetchUsers';

export const UsersComponent = () => {

    // este useRef() es para focusar el input cuando se renderiza el componente users con el foco en el input de busqueda
    const focusRef = useRef();

    const { data, isLoading, errors } = useFetchUsers('https://jsonplaceholder.typicode.com/users');

    useEffect(() => {
        focusRef.current.focus();
    }, [])

    return (
        <>
        <h1>Lista de usuarios</h1>
        <input ref={focusRef} placeholder='Buscar...'></input>
        {
            isLoading 
                ? <h4>Cargando</h4>
                : errors
                    ? <p>Ha ocurrido un error: {errors}</p>
                    :   <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Website</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((user) => (
                                    <tr key={user.id}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.website}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
        }
        </>
    )
}