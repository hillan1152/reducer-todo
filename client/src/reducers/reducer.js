export const initialState = 
{
    item: 'Learn about Reducers',
    completed: false,
    id: 3892987589
}

export const reducer = (state, action) => {
    switch(action.type){
        default:
            throw new Error("No action in here!")
    }
}