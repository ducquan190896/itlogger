export const gettechs = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:5000/techs')
        const data = await response.json()
        
        dispatch({
            type: 'get_techs',
            payload: data
        })
    }
     catch (err) {
        dispatch({
            type: 'tech_error',
            payload: err.message
        })
     }
}