import React, { useState } from 'react';
import Modal from 'react-modal'
import './CommentPopUp.css' 

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(125, 162, 169)',
      height: '280px',
      width: '400px',
      borderRadius: '20px'
    }
  };

function CommentPopUp(props) {

    const [modalIsOpen, setModalIsOpen] = useState(props.isOpen);

  return (
    <div>
       <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="create topic Modal"
        >
          <h2 className='com'>Comment Post</h2>
          <div id='box'>
          <label id='lbk'> 
            Description: <br />
            <textarea id='txtar' cols="50" rows="10"></textarea>
            <button className='close-button' onClick={() => setModalIsOpen(false)}>Close</button>
            <button className='commentbtn'> Comment</button>
          </label>
          </div>
        </Modal>
    </div>
  )
}

export default CommentPopUp
