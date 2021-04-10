import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  render () {
    return (
      <Aux>
        <Toolbar />
        <main className={classes.Content}>
          {this.props.children}
        </main>
        <footer></footer>
      </Aux>
    )
  }
}
export default Layout;