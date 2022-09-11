import React from 'react'
import { FiX } from "react-icons/fi";
import { useGlobalContext } from './context';
function Modal() {
    const {isModalOpen, closeModal} = useGlobalContext();
  return (
    <div className={`${isModalOpen ? 'modal-overelay show-modal': 'modal-overelay'}`}>
        <div className="modal-container">
            <h3>Modal content</h3>
            <p>Hymenaeos phasellus ligula ea varius etiam, sint gravida, laboris nostra, voluptatibus tellus! Explicabo? Eros eius fugit etiam, lectus, tristique velit, magnam! Cumque ullam arcu wisi nesciunt taciti illum? Aptent integer.</p>
            <button className='btn btn-close' onClick={closeModal}><FiX/></button>
        </div>
    </div>
  )
}

export default Modal