import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import Todos from '../components/Todos';
import TodoForm from '../components/TodoForm';

function List(){
    const [list, dispatch] = useReducer(reducer, initialState);
    console.log("This is the list", list)
    return(
        <div className="theList">
            <TodoForm dispatch={dispatch}/>
                <div className="main-todo-container">
                    {list.map(todo => (
                        <Todos key={todo.id} todo={todo} dispatch={dispatch} />
                    ))}
                </div>
         </div>
        );
 };

 export default List;