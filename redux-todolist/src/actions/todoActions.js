import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './type';
import { uuid } from uuidv4;

export const addTodo = text => ({
    type: ADD_TODO,
    id: uuid(),
    text
  })
  
  export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
  })
  
  export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
  })
  
  export const VisibilityFilters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE
  }