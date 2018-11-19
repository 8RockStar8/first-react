import React, { Component } from 'react';

import './css/component.css';

import Home from './home/Component';
import About from './about/Component';
import Contact from './contact/Component';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayed: <Home />
        }
    }

    changeState(show) {
        if (show === 'Home') {
            this.setState({displayed: <Home />})
        } else if (show === 'About') {
            this.setState({displayed: <About />})
        } else if (show === 'Contact') {
            this.setState({displayed: <Contact />})
        }
    }

    render() {
        return(
            <div className="content">
                {this.state.displayed}
            </div>
        );
    }
}

export default Content;
