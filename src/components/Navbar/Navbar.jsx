import React from 'react';
import s from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {
  const navbarElements = props.navbar.navbar.map(n => <NavbarItem navbarItem={n}/>);
  return (
      <nav className={s.nav}>
        {navbarElements}
      </nav>
  );
};

export default Navbar;