import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import visibilityFilter from './filterReducer'

export default combineReducers({
  todoReducer,
  visibilityFilter
});