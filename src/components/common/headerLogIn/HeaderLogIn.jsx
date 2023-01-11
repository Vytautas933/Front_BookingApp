import React from "react";
import './HeaderLogIn.css'
import { Link } from "react-router-dom";

export default function HeaderLogIn() {
  return (
    <div className="header">
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
              <p className="name">Vardenis Pavardenis</p>
                <section className="header-btn">
                    <button>Log out</button>
                </section>
                
           </section>
    </div>
  )
}
