import React from 'react';

export function List( props ){
    console.log(props)
    return(
         <div><p>{props.item}</p></div>
        )
 }