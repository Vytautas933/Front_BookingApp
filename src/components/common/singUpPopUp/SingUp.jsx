import React, { useState } from 'react';
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
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
          contentLabel="Example Modal"
        >
          <h2>Sing Up</h2>
          <form className='singUp-inner'>
        <label>
        Username:
        <input type="text" />
        </label>
        <br />
        <label>
        Email:
        <input type="email" />
        </label>
        <br />
        <label>
        Password:
        <input type="Password" />
        </label>
        <br />
        <label>
        Repeat Password:
        <input type="Password" />
        </label>
        <br />
        <label>
        Gender:
        <select >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer Not To Say</option>
        </select>
        </label>
        <br />
      </form>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    )
  }
  


export default SingUp;
