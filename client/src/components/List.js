import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import ToDo from '../components/ToDo';
import ToDoForm from '../components/ToDoForm';

function List(){
    const [list, dispatch] = useReducer(reducer, initialState);
    console.log("This is the list", list)
    return(
        <div className="theList">
            <ToDoForm dispatch={dispatch}/>
                <div className="main-todo-container">
                    {list.map(todo => (
                        <ToDo key={todo.id} todo={todo} dispatch={dispatch} />
                    ))}
                </div>
         </div>
        );
 };

 export default List;