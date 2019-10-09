import { useReducer } from 'react';

export const initialState = {
    item: 'Learn About Reducers',
    completed: false,
    id: Date.now()
}

export const reducer = (state, action) => {
    switch(action.type){  
        case 'ADD_TODO': {
            console.log('Made it here')
            return{
                ...state,
                item: action.payload
            }}
    default: 
        return state
    }
}

