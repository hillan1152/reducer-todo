import React from 'react';

const ToDo = ({ todo, dispatch }) => {
    const toggleComplete = () => {
        dispatch({
            type: 'TOGGLE_EDIT',
            payload: todo.id
        })
    }

    const removeTodo = () => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: todo.id
        })
    }

    return(
        <div className="todo-container">
            <div className={`item${todo.completed ? " completed" : ""}`}
                 onClick={toggleComplete}>
                <p className="item-todo">{todo.item}</p>
            </div>
            <button onClick={removeTodo}>Clear</button>
        </div>
    )
}

export default ToDo;
