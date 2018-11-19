import React, { Component } from 'react';

import './css/component.css';

import logo from './../../../images/logo.svg';

class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="footer-center">
                    <div className="privacy-place">
                        <p className="privacy">&copy; RockStar 2018</p>
                    </div>

                    <div className="footer-logo-place">
                        <a href="url" className="link-block">
                            <img src={logo} className="footer-logo" alt="logo" />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
