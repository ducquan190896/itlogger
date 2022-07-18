import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getLogs} from '../actions/LogActions'
import { gettechs } from '../actions/TechActions'
import Logitem from './Logitem'
import AddModal from './addModal'

function Logs({log : {logs, isLoading, current, error}, getLogs, gettechs, Tech}) {
    
    useEffect(() => {
        getLogs()
        gettechs()
        console.log(logs)
    }, [])
    useEffect(() => {
       
        console.log('edit current')
    }, [current])

    return (
        <div className='w-2/5   mx-auto mt-10 flex flex-col'>
            <div className='w-full border-2 border-slate-600 p-6'> 
                <h1 className='text-center text-4xl' >System Logs</h1>
            </div>
            {logs && logs.map(log => <Logitem key={log.id} log={log} ></Logitem>)}
            <AddModal></AddModal>
        </div>
    )
}

const mapStatetoProps = state => ({
    log: state.log,
    Tech: state.tech
})

export default connect(mapStatetoProps, {getLogs, gettechs})(Logs)