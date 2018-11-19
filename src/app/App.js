import React, { Component } from 'react';

import './css/app.css';

import Components from './components/Components';

class App extends Component {
    render() {
        return(
            <div className="app">
                <Components />
            </div>
        )
    }
}

export default App;
