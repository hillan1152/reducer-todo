export const initialState = [{
    item: 'Learn About Reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action) => {
    switch(action.type){  
        case 'ADD_TODO': 
            return [
                ...state,
                {item: action.payload, completed: false, id: Date.now()}
            ]
        case 'TOGGLE_EDIT': {
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {...todo, completed: !todo.completed };
                } else {
                    return todo
                }
            });
         }
         case 'REMOVE_TODO':
             return state.filter(todo => todo.id !== action.payload)

         default: 
            return state
    }
}
