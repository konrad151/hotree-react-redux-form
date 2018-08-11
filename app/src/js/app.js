import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/Header';
import About from './components/About';
import Coordinator from './components/Coordinator';
import When from './components/When';



class App extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
                <About />
                <Coordinator />
                <When />

                <button>Publish event</button>
            </div>
        );
    }
}
    

ReactDom.render(<App/>,document.getElementById('app'))