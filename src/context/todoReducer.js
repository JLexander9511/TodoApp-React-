import { types } from "../context";

export const todoReducer = ( state, action ) => {
    switch (action.type) {
        case types.addTodo:
            return [
                ...state, action.payload
            ];

        case types.changeSelected:
            return state.map( todo => {
                if(todo.id == action.payload.id){
                    todo.selected = action.payload.selected
                }
                return todo;
            })

        case types.changeDone:
            return state.map( todo => {
                if(todo.id == action.payload.id){
                    todo.done = action.payload.done
                }
                return todo;
            })

        case types.deleteTodo:
            return state.filter( todo => todo.id != action.payload.id)

        case types.deleteAll:
            return state = []

        case types.deleteSelection:
            return state.filter( todo => !todo.selected )

        default:
            return state;
    }
}
