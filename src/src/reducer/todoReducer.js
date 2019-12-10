export const initialState = {
    todos: [
        {
            item: '1995 Honda Civic SI Hatchback',
            complete: false,
            id: 1
        },
        {
            item: '2003 Pontiac Vibe GT',
            complete: false,
            id: 2
        },
        {
            item: '1998 Ford Escort ZX-2',
            complete: false,
            id: 3
        }
    ]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                ...state.todos,
                    {
                        item: action.payload,
                        complete: false,
                        id: Date.now()
                    }
                ]
            }
        case 'TOGGLE_COMPLETE':
            return{
                todos: state.todos.map(todo =>{
                    if(todo.id === action.payload){
                        return {
                            ...todo,
                            complete: !todo.complete
                        }
                    } else {
                        return todo
                    }
                })
            };
        case 'CLEAR_COMPLETE':
            return{
                todos: state.todos.filter(todo => !todo.complete)
            }
        default:
            return state
    }
}