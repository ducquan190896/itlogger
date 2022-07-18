const initialState = {
    logs: null,
    isLoading: false,
    current: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'get_logs': 
        console.log(action.payload)
            return {
                ...state,
                logs: action.payload
            }
        case 'add_log':
            return {
                ...state,
                logs: [...state.logs, action.payload]
            }
        case 'delete_log': 
            return {
                ...state,
                logs: state.logs.filter(log => log.id !== action.payload)
            }
        case 'update_log':
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log)
            }
        case 'get_current':
            return {
                ...state,
                current: action.payload
            }
        case 'Errors':
             return {
                ...state,
                error: action.payload
             }
        default: 
            return state
    }
}