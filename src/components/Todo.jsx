import { useState } from "react"

export const Todo = ({todo, onChangeSelection, onChangeDone, onDelete}) => {

  return (
    <div className="flex justify-between items-center my-2 w-full">
        <input type="checkbox" name="selectedTask" id="selectedTask" checked={todo.selected} onChange={ () => onChangeSelection(todo) }/>
        <span 
          className = {`font-bold text-xl ${(todo.done) ? 'line-through' : ''}`}
          onClick={ () => onChangeDone(todo) }
          >{todo.description}</span>
        <div>
            <button 
            className="ms-4 bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
            onClick={ () => onDelete(todo.id) }
            >Eliminar</button>
        </div>
    </div>
  )
}
