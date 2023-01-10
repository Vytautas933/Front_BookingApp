import React, { useState } from 'react';
import Modal from 'react-modal'
import './TopicPopUp.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(125, 162, 169)',
      height: '330px',
      width: '400px',
      borderRadius: '20px'
    }
  };

function TopicPopUp(props) {

    const [modalIsOpen, setModalIsOpen] = useState(props.isOpen);

  return (
    <div>
         <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="SingUp Modal"
        >
          <h2 className='sin'>Sing Up</h2>
          <div id='form'>
          <label id='lbl'>
            Topic: <br />
            <input id='inpt' type="text" /><br />
          </label>
          <label id='lbl'> 
            Description: <br />
            <textarea id='txtare' cols="50" rows="10"></textarea>
            <button className='close-button' onClick={() => setModalIsOpen(false)}>Close</button>
            <button className='createbtn'> Create</button>
          </label>
          </div>
        </Modal>
    </div>
  )
}

export default TopicPopUp;
