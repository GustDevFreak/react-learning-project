import { useMemo, useState } from "react"

export const Calculos = () => {

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3])

    const [show, setShow] = useState(true)

    // useMemo nos permite memorizar un valor para no tener que volver a ejecutarlo en cada renderizado
    // recibe una función (callback) y una lista de dependencias 
    // Entonces solo si la lista de dependencias cambia, la función se volverá a ejecutar
    // Caso contrario, la función no se volverá a ejecutar
    const getCalculo = useMemo(() => {
        console.log('Calculando...')
        return listaNumeros.reduce((a, b) => a + b)
    }, [listaNumeros])

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1])
    }

    return (
        <>
            <div>
                <h1>Calculos de la lista: [{listaNumeros.join(', ')}]</h1>
                {/* si show es true, muestra el parrafo */}
                {show && <p><b>Suma: </b>{getCalculo}</p>}
                <button className="btn btn-primary m-2" onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
                <button className="btn btn-primary m-2" onClick={() => agregarNumero()}>Agregar siguiente Nº</button>
            </div>
        </>
    )
}