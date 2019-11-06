import React from 'react';

const Todos = (props, { todo }) => {
    console.log('this is todo', props)
    return (
        <div>
            <p>{props.item}</p>
        </div>
    )
}

export default Todos;