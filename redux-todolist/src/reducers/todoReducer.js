import { NEW_TODO } from '../actions/type';

const initialState = {
    todolist: [],
    newTodo: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}