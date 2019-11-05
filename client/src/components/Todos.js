import React from 'react';

const Todos = (props) => {
    console.log(props.item.item)
    return (
        <>
            <p>{props.item.item}</p>
        </>
    )
}

export default Todos;