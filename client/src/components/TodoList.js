import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer'
import Todos from './Todos';
import TodoForm from './TodoForm';


const TodoList = () => {
    const [list, dispatch] = useReducer(reducer, initialState);
    console.log('This is TodoList', list)
    return(
            <div>
                <TodoForm dispatch={dispatch}/>
                {list.map(todo => (
                    <Todos key={todo.id} todo={todo} dispatch={dispatch}/>
                ))} 
            </div> 
        )
}

export default TodoList;