import { useReducer, useEffect } from "react"
import { todoReducer, types } from "../context"
import nextId from "react-id-generator";

export const useTodo = () => {

    const [state, dispatch] = useReducer( todoReducer, JSON.parse(localStorage.getItem('TodoList')))

      const onAddTodo = (newTodo) => {
        dispatch({
            type: types.addTodo,
            payload: {  
                id: nextId(),
                description: newTodo,
                done: false,
                selected: false
            }
        })
      }

      const onChangeSelection = (todo) => {
        dispatch({
            type: types.changeSelected,
            payload: {id: todo.id, selected: !todo.selected}
        })
      }

      const onChangeDone = (todo) => {
        dispatch({
            type: types.changeDone,
            payload: {id: todo.id, done: !todo.done}
        })
      }

      const onDelete = (id) => {
        dispatch({
            type: types.deleteTodo,
            payload: {id}
        })
      }

      const deleteAll = () => {
        dispatch({
            type:types.deleteAll
        })
      }
      
      const alterState = () => {

        const selectedTodos = state.map( todo => {
            if(todo.selected){
                todo.done = !todo.done
            }
            return todo
        })

        dispatch({
            type: types.changeDone,
            payload: selectedTodos
        })
        
      }

      const deleteSelection = () => {
        dispatch({
            type: types.deleteSelection,
        })
      }

      useEffect(() => {
        localStorage.setItem('TodoList', JSON.stringify(state))
    }, [state])

      return {
        state,
        onAddTodo,
        onChangeSelection,
        onChangeDone,
        onDelete,
        deleteAll,
        alterState,
        deleteSelection,
      }
}

