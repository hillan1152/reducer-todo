import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer'
import Todos from './Todos';

const TodoList = () => {
    const [list, dispatch] = useReducer(reducer, initialState);
    console.log(list)
    return(
        <div>
            {list.map(todo => (
                <Todos item={todo} key={todo.id} dispatch={dispatch}/>
            ))}
            
                
        </div>
    )
}

export default TodoList;