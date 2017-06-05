import React from 'react';
export const Todo = ({todo, remove}) => {
    // Each Todo
    return (<div className="todo"><a href="#" onClick={() => {remove(todo.id)}}>{todo.text}</a></div>);
}
export default Todo;

