import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import SingUp from "../singUpPopUp/SingUp";
import LogIn from '../logInPopUp/LogIn';
import { useNavigate} from 'react-router-dom';



function Header(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [open, setClose] = useState(false);
    const navigation = useNavigate();
    return(
        
        <section className="header">
            <p><Link to="/" className='lg'>IRentEye</Link></p>

           <section className="header-navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/us">About Us</Link></li>
                </ul>
           </section>
           <section className="header-log">
           <div id='singuppop'></div>
            <div id='loginpop'></div>
                <section className="header-btn">
                    <button 
                    onClick={() => {
                        setClose(true);
                        const box = document.getElementById("loginpop")
                        const log = createRoot(box)
                        log.render(<LogIn isOpen={open} NavHost={navigation}/>,
                        )
                        
                    }}
                    >Log in
                    </button>
                    <button
                     onClick={() => {
                         setModalIsOpen(true);
                         const container = document.getElementById("singuppop")
                         const root = createRoot(container)
                         root.render( <SingUp isOpen={modalIsOpen} />,
                        )                 
                     }}
                     >
                        Sing Up
                        </button>
                    
                </section>
                
           </section>
        </section>
        
    )
    
}

export default Header;