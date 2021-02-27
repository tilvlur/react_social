import React from 'react';
import s from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import reactLogo from '../../assets/images/reactLogo.png';
import login from '../../assets/images/login.svg';

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
        <div className={s.login}>
          {!props.isAuth
              ? <div className={s.loginEnter}>
                <NavLink to='/login'>
                  <img src={login} alt='Login' title='Login' />
                </NavLink>
              </div>

              : <div className={s.loginAuthorized}>
                <div className={s.nickName}>
                  {props.login}
                </div>
                <div className={s.avatar}>
                  <img src={!props.userAvatar
                      ? `https://robohash.org/${props.login}.png`
                      : `props.userAvatar`} alt='Avatar' />
                </div>
              </div>}
        </div>
      </header>
  );
};

export default Header;