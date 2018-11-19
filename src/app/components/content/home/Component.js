import React, { Component } from 'react';

import './css/component.css';

import logo from './../../../../images/logo.svg';

class Home extends Component {
    render() {
        let elem = [];
        let childElemOne = React.createElement('div', {className: 'home-content-animation-blocks'},
                            React.createElement('img', {src: logo, className: 'logo-animation one'})
                        );

        let childElemTwo = React.createElement('div', {className: 'home-content-animation-blocks'},
                            React.createElement('img', {src: logo, className: 'logo-animation two'})
                        );
        for (let ix = 0; ix < 9; ++ix) {
            if(ix%2 === 0) {
                elem.push(childElemOne);
            } else {
                elem.push(childElemTwo);
            }
        }
        return(
            <div className="home-content">
                <div className="home-content-left-side">

                </div>
                <div className="home-content-right-side">
                    <div className="home-content-animation-place">
                        {elem}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
