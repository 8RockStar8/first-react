import React, { Component } from 'react';

import './css/component.css';

import logo from './../../../images/logo.svg';

class Header extends Component {
    render() {
        return(
            <header>
                <div className="header-center">
                    <div className="header-logo-place">
                        <a href="url" className="link-block">
                            <img src={logo} className="logo" alt="logo" />
                        </a>
                    </div>

                    <div className="header-menu-place">
                        <ul className="header-menu">
                            <li className="header-menu-item">
                                <a href="url" className="header-menu-link">home</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="url" className="header-menu-link">about</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="url" className="header-menu-link">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
