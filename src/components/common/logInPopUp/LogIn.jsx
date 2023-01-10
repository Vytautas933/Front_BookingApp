import React, { useState } from 'react';
import Modal from 'react-modal'
import './LogIn.css'
import { login } from '.';

const cststyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(125, 162, 169)',
        height: '220px',
        width: '400px'
    }
};

function LogIn(props) {
    const [open, setClose] = useState(props.isOpen);
    const [unameOrEmail, setUnameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (event) => {
      event.preventDefault();
      login(unameOrEmail, password)
    }

  return (
    <div>
      <Modal
      isOpen={open}
      setToClose={() => setClose(false)}
      style={cststyle}
      contentLabel="LogIn Modal"
      >
        <h2>Log In</h2>
        <form className='login-inner'>
            <label className='txt'>
            Username: <br />
            <input className='input' 
            type="text" 
            value={unameOrEmail} 
            onChange={e => setUnameOrEmail(e.target.value)}
            />
            </label >
            <br />
            <label className='txt'>
            Password: <br />
             <input className='input' 
             type="Password"
             value={password} 
             onChange={e => setPassword (e.target.value)}
             />
            </label>
            <button className='close-btn' onClick={() => setClose(false)}>Close</button>
            <button className='loginbtn' onClick={handleClick}> Log In</button>
        </form>
      </Modal>
    </div>
  )
}

export default LogIn
