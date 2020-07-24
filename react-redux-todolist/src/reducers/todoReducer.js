import uuid from 'uuidv4';

const INITIAL_DATA = [{
    id: uuid,
    text: 'TEST1',
},
{
    id: uuid,
    text: 'TEST2'
}
]

const todoReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
            )
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state
    }
}

export default todoReducer;