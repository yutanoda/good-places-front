import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Account from './containers/Account/Account';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Layout>
            <Route path="/account" component={Account} />
            <Route path="/" exact component={Home} />
          </Layout>
          
      </BrowserRouter>
    );
  }
}

export default App;
