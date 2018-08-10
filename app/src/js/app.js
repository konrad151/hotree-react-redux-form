import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from './components/component';



class App extends React.Component {
    render() {
        return (
            <div>
                <header className="mainHeader">
                    <h1>React App</h1>
                </header>
                <MyComponent />
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('app'))