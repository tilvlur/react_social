import React from 'react';
import s from './Navbar.module.scss';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props) => {
  const navbarElements = props.navbar.map(n => <NavbarItem navbarItem={n} key={n.id}/>);
  return (
      <nav className={s.nav}>
        {navbarElements}
      </nav>
  );
};

export default Navbar;