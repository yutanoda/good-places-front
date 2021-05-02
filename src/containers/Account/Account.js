import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import { Link } from 'react-router-dom'
import classes from './Account.css';
import logo from '../../logo.svg';

class Home extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.Container}>
          <section className={classes.Profile}>
            <div className={classes.Photo}>
              <img className={classes.PhotoContent}
                src={logo}
                alt=""
              />
            </div>
            <div className={classes.ProfileInfo}>
              <div className={classes.FisrInfo}>
                <h2 className={classes.AccountName}>Kevin Costner</h2>
                <div className={classes.NameEdit}>
                  <Link to='/'></Link>
                </div>
              </div>
              <ul className={classes.SecondInfo}>
                <li><span>Post<span className={classes.Num}>3</span></span></li>
                <li><span>Good<span className={classes.Num}>3</span></span></li>
              </ul>
              <div className={classes.EditButtonContainer}>
                <Link to='/'><button className={classes.EditButton}>Edit</button></Link>
              </div>
            </div>
          </section>
          <section className={classes.MenuContainer}>
            <ul className={classes.MenuBar}>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}>Maps</Link></li>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}>Spots</Link></li>
              <li className={classes.MenuList}><Link to='/' className={classes.MenuLink}>Following</Link></li>
            </ul>
            <div className={classes.NewButtonContainer}>
             <Link to='/' className={classes.NewButtonLink}><div className={classes.NewButton}><span>＋</span> POST</div></Link>
            </div>
            <div></div>
          </section>
          <section></section>
        </div>
      </Aux>
    )
  }
}

export default Home;