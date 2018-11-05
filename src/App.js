/*
src/App.js
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { simpleAction } from "./actions/SimpleAction";
import { FollowRouteComponent } from "./components/routeDisplay/FollowRouteComponent";

class App extends Component {
  simpleAction = event => {
    console.log("wop");
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Haik-U</h1>
        <FollowRouteComponent style={{height: '100%'}} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
