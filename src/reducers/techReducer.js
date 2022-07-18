const initialState = {
    techs: null,
    isLoading: false,
    Error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'get_techs':
            console.log(action.payload)
            return {
                ...state,
                techs: action.payload
            }
        case 'tech_error':
            return {
                ...state,
                Error: action.payload
            }
        default: 
            return state
    }
} 