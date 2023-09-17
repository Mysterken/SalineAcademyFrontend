import { useState } from 'react';
import React from "react";
import logo from '../img/logo-saline-royale-academy-favicon-blanc-V2.svg';
import iconLogin from '../img/icon-login.png';
import '../Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <header className='hero'>
            <div className='container_header'>
                <div className='container_logo'>
                    <a href='#'><img src={logo} alt='logo'></img></a>
                </div>
                <nav>
                    <ul>
                        <Link to="Home" className='linkHome'>Home</Link>
                        <a href="#"><li>Watch</li></a>
                        <a href="#"><li>Listen</li></a>
                        <a href="#"><li>Learn</li></a>
                    </ul>
                </nav>
                <div className='container_login'>
                    <img src={iconLogin} alt='Connexion au profil'></img>
                </div>
            </div>
            <div className='containerFlex'>
                <h1>SALINE ACADEMY</h1>
            </div>
            <button className='CTADiscover'>Discover</button>
        </header>
      </>
    )
  }
export default Header;