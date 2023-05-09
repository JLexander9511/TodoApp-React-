
export const TodoControlButtons = ({ deleteAll, alterState, deleteSelection }) => {
  return (
    <div className="my-5 flex bg-slate-400 rounded-lg p-4">
        <button 
            className="mx-2 bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
            onClick={ deleteAll }>Eliminar todas las tareas</button>
        <button 
            className="mx-2 bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
            onClick={ alterState }>Alternar estado de tarea de seleccion</button>
        <button 
        className="mx-2 bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
        onClick={ deleteSelection }>Borrar seleccion</button>
    </div>
  )
}
