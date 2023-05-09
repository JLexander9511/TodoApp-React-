import { Header, AddTask, Todo, TodoControlButtons } from "./components"
import { useTodo } from "./utils/useTodo";

export const TodoApp = () => {

    const {state,
        onAddTodo,
        onChangeSelection,
        onChangeDone,
        onDelete,
        deleteAll,
        alterState,
        deleteSelection,} = useTodo()

  return (
    <>
    <Header />
    <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center mt-10 bg-slate-400 w-6/12 rounded-lg py-3">
            <AddTask onAddTodo={ onAddTodo }/>

            <div className="todosContainer bg-slate-200 w-11/12 rounded-lg p-2 flex flex-col items-center">
                {
                    (state.length === 0) && (<span className="font-bold text-xl">No hay tareas registradas</span>)
                }

                {
                    state.map( todo => (
                        <Todo 
                            key={ todo.id } 
                            todo = { todo } 
                            onChangeSelection = { onChangeSelection } 
                            onChangeDone = { onChangeDone }
                            onDelete = { onDelete }
                            />
                    ))
                }
            </div>
        </div>
        {
                    (state.length > 0) && (<TodoControlButtons deleteAll = { deleteAll } alterState = { alterState } deleteSelection = { deleteSelection }/>)
                }
    </div>
    
    </>

  )
}
