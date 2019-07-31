import { SUBMIT_TODO, TOGGLE_TODO } from '../actions/index';

const initialState = {
    todos: [{
        value: 'MOW THE LAWN',
        completed: false
    }]
};

const reducer = (state = initialState, action) => {
    console.log("reducers.js: reducer: action: ", action);
    switch (action.type) {
        case SUBMIT_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };
        default:
            return state;
    }
};

export default reducer;