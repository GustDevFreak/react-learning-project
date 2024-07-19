import { useState } from "react"

export const AgregarTarea = ({addNewDeveloper}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addNewDeveloper(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Add new developer" value={inputValue} onChange={onInputChange}></input>
        </form>
    )
}
