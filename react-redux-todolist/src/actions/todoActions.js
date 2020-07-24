import { uuid } from 'uuidv4';

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: uuid,
    text
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id: id
})

export const deleteTodo = (id) => ({
    type: 'REMOVE_TODO',
    id: id
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}