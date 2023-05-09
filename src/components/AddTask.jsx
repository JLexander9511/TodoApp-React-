import {useForm} from '../utils/useForm'

export const AddTask = ({ onAddTodo }) => {

    const { updateInput, onResetForm, todo } = useForm({
        todo: ''
      })

      const addTask = (e) => {
        e.preventDefault()
        if(todo.length < 1) return
        onAddTodo(todo.trim())
        onResetForm()
      }

    return (
        <div className="bg-slate-200 p-3 w-11/12 rounded-lg m-2">
          <form onSubmit={ addTask } className='flex justify-between'>

          <input 
            className='w-full text-xl rounded-lg border-solid border-black ps-2'
            type="text" 
            name="todo" 
            value={todo} 
            onChange={updateInput}/>
          <button className="ms-4 bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">Añadir</button>

          </form>
    </div>
  )
}
