import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { IoArrowForwardOutline} from "react-icons/io5";

import classes from './SignUp.css'
import Input from '../../../components/UI/Input/AuthInput/AuthInput';

class SignUp extends Component {

  state = {
    orderForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  }

  inputChangedHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  render () {
    return (
      <div className={classes.Container}>
        <div className={classes.SignUpContainer}>
          <h4 className={classes.Title}>SignUp</h4>

          <Input label='Email' />
          
          <div className={classes.ButtonContainer}>
            <button className={classes.Button}><span>Next</span><span><IoArrowForwardOutline /></span></button>
          </div>
          <div>
            <p>Already SingnUp? <Link to='/' className={classes.NextLink}>SignIn</Link></p>
          </div>
        </div>
      </div>
    );
  }
}


export default SignUp;