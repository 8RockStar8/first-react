import React, { Component } from 'react';

import './css/component.css';

import Header from './header/Component';
import Content from './content/Component';
import Footer from './footer/Component';

class Components extends Component {
    render() {
        return(
            <div className="components">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}

export default Components;
