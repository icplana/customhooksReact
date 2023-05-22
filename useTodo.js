import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"



export const useTodo = () => {

    const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || []
    }

    const [ todos, dispatchTodo ] = useReducer( todoReducer, [], init )

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
        
    
      
    }, [ todos ])
    

    const handleNewTodo = todo => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }


        dispatchTodo( action ) //llamamos a la accion con el dispatch
    }

    const handleDeleteTodo = id => {
        const action = {
            type: 'Borrar',
            payload: id
        }
        
        dispatchTodo( action )
    }

    const handleDoneTodo = id => {

        console.log(todos)
        const action = {
            type: 'Done',
            payload: id
        }
        
        dispatchTodo( action )
    }

    const todosCount = () => {
        return todos.length
    }

    const pendingTodosCount = () => {
        return todos.filter( element => element.done === false).length
    }

  return {
    handleDeleteTodo,
    handleDoneTodo,
    handleNewTodo,
    todos,
    todosCount,
    pendingTodosCount
  }
}
