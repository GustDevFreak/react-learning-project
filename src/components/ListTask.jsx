import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

// ESTADO INICIAL
const initialState = [{
    id: new Date().getTime(),
    task: 'Learn React',
    completed: false
}]

// Reducer para manejar las tareas en función de la acción recibida.
// Este reducer acepta el estado actual y una acción, y devuelve el nuevo estado.
const taskReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload]
        case 'FINISH_TASK':
            return state.map( task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        completed: !task.completed // Cambia el estado de la tarea a completada
                    }
                }
                return task // Devuelve la tarea sin cambios si el id no coincide.
            })
        case 'DELETE_TASK': // Elimina una tarea del estado filtrando por su id.
            return state.filter(task => task.id !== action.payload)
        case 'RESET':
            return []
        default:
            return state
    }
}

export const ListTask = () => {

    const [stateUseReducer, dispatch] = useReducer(taskReducer, initialState)

    const {task, formState, onInputChange} = useForm({ task: '' })

    // Aqui se definen las funciones que contienen las tareas y acciones que van a ser despachadas por el useReducer.
    const addTaskForm = (event) => {
        event.preventDefault()
        if(formState.task === '') return
        const task = {
            id: new Date().getTime(),
            task: formState.task,
            completed: false
        }
        console.log(task)
        const action = {
            type: 'ADD_TASK',
            payload: task
        }
        dispatch(action)
    }

    const finishTask = ({id}) => {
        const action = {
            type: 'FINISH_TASK',
            payload: id
        }
        dispatch(action)
    }

    const deleteTask = ({id}) => {
        const action = {
            type: 'DELETE_TASK',
            payload: id
        }
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: 'RESET',
            payload: ''
        }
        dispatch(action)
    }

    return (
        <>
            <h1>ListTask</h1>
            <form onSubmit={addTaskForm}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="task" placeholder="Add Task" 
                        value={task} onChange={onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary m-2">Submit</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className="list-group">
                {stateUseReducer.map (item => {
                    return <li key={item.id} className="list-group-item d-flex justify-content-between">
                        <span>{item.task}</span>
                        <div>
                        <input type="checkbox" value={item.completed} 
                            onChange={() => finishTask(item)}></input>    
                        <button className="btn btn-danger btn-sm"
                            onClick={() => deleteTask(item)}>x</button>
                        </div></li>
                })}
            </ul>
        </>
    )
}