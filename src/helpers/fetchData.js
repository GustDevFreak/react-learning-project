export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        const data = await response.json()
        console.log(data)
        return {
            data,
            isLoading: false
        }
    } catch (error) {
        console.log(error);
    }
}