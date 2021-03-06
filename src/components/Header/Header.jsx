import React from 'react';
import s from './Header.module.scss';
import reactLogo from '../../assets/images/reactLogo.png';
import LoginStatus from './LoginStatus';

const Header = (props) => {
  return (
      <header className={s.header}>
        <div className={s.logoWrapper}>
          <img
              src={reactLogo}
              alt='logo' />
        </div>
        <div className={s.logoTitle}>
          <h1>social<span>reactor</span></h1>
        </div>

        <LoginStatus {...props} />
      </header>
  );
};


export default Header;