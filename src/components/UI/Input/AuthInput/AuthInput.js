import React from 'react';
import classes from './AuthInput.css';
import Aux from '../../../../hoc/Aux/Aux';

const authInput = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input className={classes.inputElement} />
      break;

    default:
      inputElement = <input />
  }

  return (
    <Aux>
      <label className={classes.Label}>{props.label}</label>
      <div className={classes.FormContainer}>
        <input 
          className={classes.Input} 
          onChange={(event) => this.inputChangedHandler(event)}
        />
      </div>
    </Aux>
  )
}

export default authInput;