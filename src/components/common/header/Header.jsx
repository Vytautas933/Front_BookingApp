import React from "react";
import './Header.css';

function Header(){

    return(
        <section className="header">
           <section className="header-logo">
                Logo
           </section>
           <section className="header-navbar">
                Nav bar
           </section>
           <section className="header-log">
                <section className="header-logIn">
                    Log in
                </section>
                <section className="header-SingUp">
                    Sing In
                </section>
           </section>
        </section>
    )
}

export default Header;