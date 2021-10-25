export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
        case 'toggle':
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo = { ...todo, done: !todo.done }
                }
                return todo
            })
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload.id)

        default:
            return state
    }
}
