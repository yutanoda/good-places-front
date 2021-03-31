import React from 'react';
import classes from './NavigationItems.css';
import navigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul>
    <navigationItem>Link1</navigationItem>
    <navigationItem>Link2</navigationItem>
    <navigationItem>Link3</navigationItem>
  </ul>
);

export default navigationItems;