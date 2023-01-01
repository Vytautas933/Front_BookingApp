import React from "react";
import './Header.css';
import { Link } from "react-router-dom";



function Header(){

    return(
        <section className="header">
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
                    <button>Log in</button>
                    <button>Sing in</button>
                </section>
                
           </section>
        </section>
    )
}

export default Header;