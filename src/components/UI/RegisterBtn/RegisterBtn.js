import React from 'react';
import classes from './RegisterBtn.css';

const registerBtn = () => (
  <div className={classes.Container}>
    <a className={classes.Banner}>
      <div className={classes.Content}>
          <div className={classes.Title}>
         
            <p className={classes.Title1}>NOT FAMILIAR WIRH THE LOCAL ?</p>
            <p className={classes.Title2}>FIND SOMEWHERE TO GO!</p>
          </div>
          <p className={classes.Description}>Share some places definitely to visit</p>
          <button className={classes.Button}>JOIN NOW</button>
      </div>
    </a>
  </div>
);

export default registerBtn;

