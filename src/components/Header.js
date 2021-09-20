import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Resources/Logo.svg'
import "./styles/Header.css"

import { useApp } from '../contexts/AppContext'


export const Header = () => { 

    const {dropDownManuShown, showDropDownManu, alwaysHideDropDownManu} = useApp();

    return (
        <header className="App-header">
            <nav className={dropDownManuShown ? "drop-down" : ""}>
                <div className="logo"
                    onClick={showDropDownManu}>
                    <img src={logo} alt="company"/>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link to='/' onClick={alwaysHideDropDownManu}> HOME </Link>
                        </li>
                        <li>
                            <Link to='/about-us' onClick={alwaysHideDropDownManu}> ABOUT US </Link>
                        </li>
                        <li>
                            <Link to='/contact-us' onClick={alwaysHideDropDownManu}> CONTACT US </Link>
                        </li>
                    </ul>
                </div>
                <div className="login">Log in</div>
            </nav>
        </header>
    )
}

