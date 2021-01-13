import React, { useReducer } from 'react'
import ToDoContext from './Context'
import toDoReducer from './reducer'

function Provider({children}) {
    const [todos, dispatchToTodos] = useReducer(toDoReducer, [])
    return (
        <ToDoContext.Provider value={{ todos, dispatchToTodos}}>
            {children}
        </ToDoContext.Provider>
    )
}

export default Provider