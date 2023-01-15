import React from "react";
import './HeaderLogIn.css'
import { Link } from "react-router-dom";


export default function HeaderLogIn() {
  const username = localStorage.getItem('user')
  return (
    <div className="header">
       <p><Link to="/" className='lgs'>IRentEye</Link></p>
           <section className="header-navbar">
                <ul>
                     <li><Link to="/">Home</Link></li>
                    <li><Link to="/forum">Forum</Link></li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/us">About Us</Link></li>
                </ul>
           </section>
           <section className="header-log">
              <p className="name">{username}</p>
                <section className="header-btn">
                    <button onClick={()=> {
                      localStorage.clear();
                      window.location.reload();
                    }}>Log out</button>
                </section>
                
           </section>
    </div>
  )
}
