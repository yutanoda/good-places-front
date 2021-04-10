import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import classes from './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Layout><Home /></Layout>
      </div>
    );
  }
}

export default App;
