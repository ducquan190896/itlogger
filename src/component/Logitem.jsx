import Moment from 'react-moment';
import {ImBin} from 'react-icons/im'
import {connect} from 'react-redux'
import {deletelog, updatelog, getcurrent} from '../actions/LogActions'
import {AiFillEdit} from 'react-icons/ai'
// import EditlogModal from './editlogModal';

function Logitem({log, deletelog, Log: {current}, updatelog, getcurrent}) {
    
    const onClick = (e) => {
        // console.log('edit')
                getcurrent(log)
        
            // console.log(current)
        
    }

    return (
        <div className='w-full border-t-0 border-2 border-slate-600 p-6 flex flex-col items-left pl-10 relative'> 
            <h2 className={log.attention ? ' cursor-pointer text-lg text-red-600' : 'text-lg text-sky-600 cursor-pointer'}>{log.message}</h2>
            <p >{log.tech} last updated at <Moment className='ml-4 font-bold' format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment></p> 
            <button onClick={() => deletelog(log.id)} className=' transfrom-bin text-2xl absolute top-1/4 right-6 '><ImBin/></button>
           {/* <EditlogModal logitem={log}></EditlogModal> */}
           <button onClick={onClick} className=' transfrom-bin text-2xl absolute top-2/3 right-6 '><AiFillEdit/></button>
        </div>
    )
}


const mapPropstoState = state => ({
    Log: state.log
})

export default connect(mapPropstoState, {deletelog, updatelog, getcurrent})(Logitem)