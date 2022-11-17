import React, { useState } from 'react'
import { images } from '../../Constants'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <img src={images.logo} alt="" />
        </div>
        <div className={classes.nav_links}>

          <div className={classes.page_links}>
            
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>

          </div>

          <div className={classes.login_signup}>
            <a href="" className={classes.login}>Log in</a>
            <a href="" className={classes.signup}>Signup</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar