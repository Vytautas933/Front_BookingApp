import React, { useState } from 'react';
import Modal from 'react-modal'
import './SingUp.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(125, 162, 169)',
    height: '350px',
    width: '250px'
    
  }
};

function SingUp (props){

  const [modalIsOpen, setModalIsOpen] = useState(props.isOpen);

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="SingUp Modal"
        >
          <h2>Sing Up</h2>
          <form className='singUp-inner'>
        <label>
        Username: <br />
        <input className='in' type="text" />
        </label>
        <br />
        <label>
        Email: <br />
        <input className='in' type="email" />
        </label>
        <br />
        <label>
        Password: <br />
        <input className='in' type="Password" />
        </label>
        <br />
        <label>
        Repeat Password: <br />
        <input className='in' type="Password" />
        </label>
        <br />
        <label>
        Gender: <br />
        <select className='in' >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer Not To Say</option>
        </select>
        </label>
        <br />
      </form>
          <button className='close-button' onClick={() => setModalIsOpen(false)}>Close</button>
          <button className='singbtn'> Sing up</button>
        </Modal>
      </div>
    )
  }
  


export default SingUp;
