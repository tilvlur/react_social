import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavbarItem.module.css';


const NavbarItem = (props) => {
  return (
      <div className={s.item}>
        <NavLink to={props.navbarItem.link} activeClassName={s.activeLink}>{props.navbarItem.navbarItem}</NavLink>
      </div>
  )
}

export default NavbarItem;