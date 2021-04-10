import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Home.css';
import RegisterBtn from '../../components/UI/RegisterBtn/RegisterBtn';


class Home extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.Container}>
          <RegisterBtn />
        </div>
      </Aux>
    )
  }
}

export default Home;