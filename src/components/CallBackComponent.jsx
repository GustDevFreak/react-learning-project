import { useCallback, useState } from 'react';
import { Incrementar } from './Incrementar';

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    // este useCallback memoriza la funcion incrementarPadre que evita que el componente Incrementar se renderice de nuevo
    const incrementarPadre = useCallback(
        (val) => {
            // contador es una copia de counter que viene dentro de setCounter
            setCounter(contador => contador + val)
        },
        []
    )

    return (
        <>
            <h1>Contador: {counter}</h1>
            <Incrementar incrementar={incrementarPadre} />
        </>
    )
}