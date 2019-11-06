export const initialState = 
[{
    item: 'Learn about Reducers',
    completed: false,
    id: Date.now()
}]

export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TODO": 
            return[
                ...state, 
                {item: action.payload, completed: false, id: Date.now()}
            ]
            
        default:
            return state
    }
}