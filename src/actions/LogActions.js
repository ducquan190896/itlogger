export const getLogs = () => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:5000/logs')
        const data = await response.json()
        
        dispatch({
            type: 'get_logs',
            payload: data
        })
    } catch (err) {
        dispatch({
            type: 'Errors',
            payload: err
        })
    }
}


export const addlog = (formdata) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:5000/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        const data = await response.json()
        dispatch({
            type: 'add_log',
            payload: data
        })
    } catch (err) {
        dispatch({
            type: 'Errors',
            payload: err.message
        })
    }
}

export const deletelog = (logid) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:5000/logs/${logid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
           
        })
        const data = await response.json()
        dispatch({
            type: 'delete_log',
            payload: logid
            
        })
    } catch (err) {
        dispatch({
            type: 'Errors',
            payload: err.message
        })
    }
}


export const updatelog = (logid, formdata) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:5000/logs/${logid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
        const data = await response.json()
        dispatch({
            type: 'update_log',
            payload: data
        })
    } catch (err) {
        dispatch({
            type: 'Errors',
            payload: err.message
        })
    }
}

export const getcurrent = (log) => (dispatch) => {
    dispatch({
        type: 'get_current',
        payload: log
    })
}