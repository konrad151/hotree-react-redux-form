import React from 'react';
import { connect } from "react-redux";

import { categoriesFetched } from './actions/index'
import { employesFetched } from './actions/index'

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
            .then(json => this.props.categoriesFetched(json));

        fetch(`./employes.json`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
            })
            .then(res => res.json())
            .then(json => this.props.employesFetched(json));
        
    }

    render() {
        return (
            <div>
                <Header />
                <EventForm categories={this.props.categories} employes={this.props.employes}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {    
        categories: state.categories,
        employes: state.employes
    }
  };
const mapDispatchToProps = { categoriesFetched, employesFetched };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);