import React, { useState } from 'react';



function ToDoForm({ dispatch }){
    const [item, setItem] = useState('');
    console.log("this is an item", item);

    const handleChanges = e => {
        setItem(e.target.value)
    }

    const submitItem = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: item
        });
        setItem("")
    };

    return(
        <div>
            <h2>Todo List</h2>
            <form onSubmit={submitItem}>
                <input 
                    name="item"
                    value={item}
                    onChange={handleChanges}
                />
                <button>Add To List</button>
            </form>
        </div>
    )
}

export default ToDoForm;