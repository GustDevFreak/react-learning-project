// CUSTOM HOOK

import { useEffect, useState } from "react"
import { fetchData } from "../../helpers/fetchData"

export const useFetchData = (endpoint) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Esto se ejecuta cada vez que cambia el endpoint.
    // Esto es asincrono entonces se utiliza Async / await
    const getData = async () => {
        const {data, isLoading} = await fetchData(endpoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    // Tambien se puede utilizar como una promesa
    // useEffect(() => {
    //     fetchData(endpoint)
    //         .then(res => {
    //             setData(res.data)
    //             setIsLoading(res.isLoading)
    //         })
    // }, [endpoint])

    return {
        data,
        isLoading
    }
}
