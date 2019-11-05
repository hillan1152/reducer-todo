import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer';

import Todos from './Todos';

const TodoForm = () => {
    const [newItem, setNewItem] = useState("")
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state.item)
    const handleChanges = e => {
        setNewItem(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newItem || state.item })

    }

    return(
        <div className="todoForm">
            <h3>Add To List</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    id="item"
                    value={newItem}
                    onChange={handleChanges}
                />
                <button type="submit">Add Another Item</button>
            </form>  
            <Todos item={state} key={state.id}/>
        </div>
    )
}

export default TodoForm;