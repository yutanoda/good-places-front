import React, { Component } from 'react';
import classes from './SignUp.css'
import {Link} from 'react-router-dom'
import { IoArrowForwardOutline} from "react-icons/io5";

class SignUp extends Component {
  render () {
    return (
      <div className={classes.Container}>
        <div className={classes.SignUpContainer}>
          <h4 className={classes.Title}>SignUp</h4>
          <label>Email</label>
          <div className={classes.FormContainer}><input className={classes.Form}></input></div>
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