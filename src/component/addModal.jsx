import ReactModal from 'react-modal'
import {AiOutlinePlus} from 'react-icons/ai'
import { IoIosInformation} from 'react-icons/io'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {useState, useEffect} from 'react'
import AddlogModal from './addlogModal'

ReactModal.setAppElement('#root')

function AddModal() {
    const [isOpen, setIsOpen] = useState(false)

    const customStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: 'rgba(255, 255, 255, 0.75)'
            backgroundColor: 'transparent'
          },
        content: {
         
        bottom: '0',
        right: '0',
        position: 'fixed',
        width: '0',
        height: '0',
        background: 'transparent',
        border: 'none'
        },
      }
      

    const closefuntion = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <div >
            <ReactModal isOpen={isOpen} onRequestClose={closefuntion} contentLabel='openmodal' style={customStyles}>
              
               <AddlogModal></AddlogModal>
                <button className='fixed bottom-28 right-10 '>
                    <IoIosInformation className='w-10  p-2 h-10 bg-pink-400 text-white rounded-full cursor-pointer hover:bg-pink-700 '></IoIosInformation>
                </button>
            </ReactModal>
            
            <button className='fixed bottom-10 right-10' onClick={closefuntion}><AiOutlinePlus className='w-10 p-2 h-10 bg-blue-400 text-white rounded-full cursor-pointer hover:bg-blue-700'></AiOutlinePlus></button>

        </div>
    )
}

export default AddModal