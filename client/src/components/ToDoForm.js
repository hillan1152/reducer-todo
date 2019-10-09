import React, { useState } from 'react';



export function ToDoForm({ dispatch }){
    const [item, setItem] = useState('');
    console.log("this is an item", item);

    const handleChanges = e => {
        setItem(e.target.value)
    }

    return(
        <div>
            <input 
                type="text"
                className="form-input"
                name="item"
                value={item}
                onChange={handleChanges}
            />
            <button type="submit" onClick={() => dispatch({ type: 'ADD_TODO', payload: item})}>Add To List</button>
        </div>
    )
}