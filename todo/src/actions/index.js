export const SUBMIT_TODO = "SUBMIT_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export function submitTodo(todo) {
    console.log("actions/index.js: submitTodo: todo: ", todo);
    return {
        type: SUBMIT_TODO,
        payload: { value: todo, completed: false }
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        payload: index
    };
}