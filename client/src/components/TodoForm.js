import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [newItem, setNewItem] = useState('') 
    console.log(newItem)

    const handleChanges = e => {
        setNewItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newItem })
        setNewItem('')
    };

    return(
        <div className="todoForm">
            <h3>Add To List</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newItem}
                    onChange={handleChanges}
                />
                <button>Add Another Item</button>
            </form>   
        </div>
    )
}

export default TodoForm;