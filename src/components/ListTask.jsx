// ESTADO INICIAL

const initialState = [{
    id: 1,
    task: 'Learn React',
    completed: false
}]

// TAREAS

const newTask = {
    id: 2,
    task: 'Learn Redux',
    completed: false
}

const newEditTask = {
    id: 2,
    task: 'Learn Redux Edit',
    completed: false
}

// ACCIONES

const addTask = {
    type: 'ADD_TASK',
    payload: newTask
}
const editTask = {
    type: 'EDIT_TASK',
    payload: newEditTask
}
const deleteTask = {
    type: 'DELETE_TASK',
}

// Reducer para manejar las tareas en función de la acción recibida.
// Este reducer acepta el estado actual y una acción, y devuelve el nuevo estado.
const taskReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_TASK':
                return [...state, action.payload]
        case 'EDIT_TASK':
                return [...state, action.payload]
        case 'DELETE_TASK':
                return []
        default:
            break;
    }
    return state
}

export const ListTask = () => {
    return (
        <div>ListTask</div>
    )
}

console.log(taskReducer(initialState, addTask))