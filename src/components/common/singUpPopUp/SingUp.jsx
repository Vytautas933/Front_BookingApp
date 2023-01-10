import React, { useState } from 'react';
import Modal from 'react-modal'
import './SingUp.css'
import { singup } from '.';

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
    width: '400px',
    borderRadius: '20px'
  }
};

function SingUp (props){

  const [modalIsOpen, setModalIsOpen] = useState(props.isOpen);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    singup(username, email, password, repeatPassword, gender)
  }

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          contentLabel="SingUp Modal"
        >
          <h2 className='sin'>Sing Up</h2>
          <form className='singUp-inner'>
        <label id='lbl'>
        Username: <br /> 
        <input className='in' type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        </label>
        <br />
        <label>
        Email: <br />
        <input className='in' type="email" 
        value={email}
        onChange = {e => setEmail(e.target.value)}
        />
        </label>
        <br />
        <label>
        Password: <br />
        <input className='in' type="Password" 
        value={password}
        onChange = {e => setPassword(e.target.value)}
        />
        </label>
        <br />
        <label>
        Repeat Password: <br />
        <input className='in' type="Password" 
        value={repeatPassword}
        onChange= {e => setRepeatPassword(e.target.value)}
        />
        </label>
        <br />
        <label>
        Gender: <br />
        <select className='in'  value={gender} onChange={e => setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer Not To Say</option>
        </select>
        </label>
        <br />
      </form>
          <button className='close-button' onClick={() => setModalIsOpen(false)}>Close</button>
          <button className='singbtn' onClick={handleClick}> Sing up</button>
        </Modal>
      </div>
    )
  }
  


export default SingUp;
