import { useReducer } from 'react';

export const initialState = {
    item: 'Learn About Reducers',
    completed: false,
    id: Date.now()
}

export const reducer = (state, action) => {
    switch(action.type){  
    default: 
        return state
    }
}

