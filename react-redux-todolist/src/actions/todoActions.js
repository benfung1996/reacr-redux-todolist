import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER} from '../actions/types';
import { uuid } from 'uuidv4';

export const addTodo = text => ({
    type: ADD_TODO,
    id: uuid,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})