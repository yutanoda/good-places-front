import React, { Component } from 'react';
import classes from './SignUp.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import { IoArrowForwardOutline} from "react-icons/io5";

class SignUp extends Component {

  state = {
    email: null
  }

  inputChangedHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  render () {
    return (
      <div className={classes.Container}>
        <div className={classes.SignUpContainer}>
          <h4 className={classes.Title}>SignUp</h4>
          <label>Email</label>
          <div className={classes.FormContainer}>
            <input 
              className={classes.Form} 
              onChange={(event) => this.inputChangedHandler(event)}
            />
          </div>
          <div className={classes.ButtonContainer}>
            <button className={classes.Button}><span>Next</span><span><IoArrowForwardOutline /></span></button>
          </div>
          <div>
            <p><Link to='/' className={classes.NextLink}>SignIn</Link></p>
          </div>
        </div>
      </div>
    );
  }
}


export default SignUp;