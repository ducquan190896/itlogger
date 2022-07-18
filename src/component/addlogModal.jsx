import Modal from 'react-modal'
import {useState, useEffect, useRef} from 'react'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {connect} from 'react-redux'
import {gettechs} from '../actions/TechActions'
import {addlog, getcurrent} from '../actions/LogActions'


function AddlogModal({log: {current}, Tech, addlog, getcurrent}) {
    const [isOpen, setIsOpen] = useState(false)
    const [formdata, setFormdata] = useState({
        message: '',
        attention: false,
        date: new Date(),
        tech: ''
    })
    const {message, attention, tech} = formdata

    const closefunction = () => {
        setIsOpen(prevState => !prevState)
      } 
    
      console.log('edit on addlogmodal')
    useEffect(() => {
        console.log('edit on addlogmodal')
        // if(log.current) {
        //     setFormdata({...log.current, date: new Date()})
        //     closefunction()
        // }
        closefunction()
    }, [current])
 
    const style={
       overlay: {
        backgroundColor: 'transparent'
       },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          width: '800px',
          height: '600px'
        }
      }

     

     

      const onChange = (e) => {
        setFormdata(prevState => ({...prevState, [e.target.name]: e.target.value}))
      }
      const onSubmit = (e) => {
        e.preventDefault()
        console.log(formdata)
        addlog(formdata)
        setFormdata({
            tech: '',
            message: '',
            attention: false,
            date: new Date()
        })
      
      }

    return (
        
    <div className='fixed bottom-40 right-10' id='form-modal'>
        <Modal isOpen={isOpen} onRequestClose={closefunction} style={style} contentLabel={'formlog'}>
            <form className='flex flex-col items-lef pl-6 jusitify-center' onSubmit={onSubmit}>
                <h1>Enter System Log</h1>
                <div className='flex flex-col my-4'>
                    <label className='text-md text-green-400 my-2'> Log Message</label>
                    <input type="text" value={message} name='message' onChange={onChange}n placeholder='type your message' className='border-b-4 border-green-400 w-full pb-2 focus:outline-none'/>
                </div>
                <select name="tech" id="" value={tech} onChange={onChange} className="my-6" placeholder='technician'>
                    {Tech.techs && Tech.techs.map(techitem => <option key={techitem.id} value={`${techitem.firstName} ${techitem.lastName}`}>{techitem.firstName} {techitem.lastName}</option>)}
                   
                </select>
                <div className='label cursor-pointer my-6 w-1/4'>
                    <span className='label-text'>Attention</span>
                    <input type="checkbox" checked={attention} className="checkbox checkbox-lg" onChange={() => setFormdata(prevState => ({...prevState, attention: !prevState.attention}))}/>
                </div>
                <button type='submit' className='btn btn-info'>Submit</button>
            </form>
        </Modal>
        <button  onClick={closefunction}>
        <BsFillPersonPlusFill className='w-10  p-2 h-10 bg-pink-400 text-white rounded-full cursor-pointer hover:bg-pink-700 '></BsFillPersonPlusFill>
        </button>
    </div>
       
    )
}

const MapStatetoProps = state => ({
    log: state.log,
    Tech: state.tech
})



export default connect(MapStatetoProps, {addlog, getcurrent})(AddlogModal)