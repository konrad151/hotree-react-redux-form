import React from 'react';

import { connect } from "react-redux";
// import { formTaken } from "./actions/index";
import { categoriesFetched } from './actions/index'

import Header from './components/Header';
import EventForm from './components/Form';



class App extends React.Component {
    componentDidMount() {
        // fetch("./categories.json")

        fetch(`./categories.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
            .then(res => res.json())
            .then(json => this.props.categoriesFetched(json.results));
    }

    render() {
        return (
            <div>
                <Header />
                {/* <About />
                <Coordinator />
                <When /> */}
                <EventForm categories={this.props.categories}/>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {    
      categories: state.categories
    }
  };
const mapDispatchToProps = { categoriesFetched };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);