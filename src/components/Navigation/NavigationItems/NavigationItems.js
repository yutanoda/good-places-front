import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>Places</NavigationItem>
    <NavigationItem>Users</NavigationItem>
    <NavigationItem>My Account</NavigationItem>
    <NavigationItem>Login</NavigationItem>
  </ul>
);

export default navigationItems;