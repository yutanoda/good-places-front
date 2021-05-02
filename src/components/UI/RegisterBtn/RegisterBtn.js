import React from 'react';
import classes from './RegisterBtn.css';
import { Link } from 'react-router-dom';

const registerBtn = () => (

    <Link className={classes.Container} to='/'>
      <div className={classes.Content}>
          <div className={classes.Title}>
            <p className={classes.Title1}>NOT FAMILIAR WIRH THE LOCAL ?</p>
            <p className={classes.Title2}>FIND SOMEWHERE TO GO</p>
          </div>
          <p className={classes.Description}>Share some spots definitely to visit</p>
          <div className={classes.Button}>JOIN NOW</div>
      </div>
    </Link>

);

export default registerBtn;

