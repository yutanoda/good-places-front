import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
  <li className={classes.NavigationItem}>
    <a>{props.children}</a>
  </li>
);

export default navigationItem;