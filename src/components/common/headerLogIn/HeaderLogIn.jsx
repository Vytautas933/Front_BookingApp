import React from "react";
import './HeaderLogIn.css'

export default function HeaderLogIn() {
  return (
    <div className="header">
      <section className="header-logo">
                <a href="eee.js">IRentEye</a>
           </section>
           <section className="header-navbar">
                <ul>
                    <li><a href="aa.js">Home</a></li>
                    <li><a href="bb.js">Explore</a></li>
                    <li><a href="cc.js">Forum</a></li>
                    <li><a href="dd.js">About Us</a></li>
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
