import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
  <li>{props.children}</li>
);

export default navigationItem;