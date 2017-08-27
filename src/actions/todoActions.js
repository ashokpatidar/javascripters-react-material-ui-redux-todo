let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type:'ADD_TODO',
        id: nextTodoId++,
        text:text
    }
};

export const toggleTodo = id =>({
    type:'TOGGLE_TODO',
    id
});