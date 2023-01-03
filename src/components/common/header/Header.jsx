import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import SingUp from "../singUpPopUp/SingUp";




function Header(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return(
        
        <section className="header">
            <div id='singuppop'></div>
           <section className="header-logo">
                <a href="eee.js">IRentEye</a>
           </section>
           
           <section className="header-navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/us">About Us</Link></li>
                </ul>
           </section>
           <section className="header-log">
                <section className="header-btn">
                    <button onClick={() => {
                        console.log("login")
                    }}>Log in</button>
                    <button
                     onClick={() => {
                        console.log("iki cia veikia")
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
// const root = ReactDOM.createRoot(document.getElementById("singuppop"));
export default Header;