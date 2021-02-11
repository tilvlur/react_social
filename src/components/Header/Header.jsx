import React from 'react';
import s from './Header.module.scss';

const Header = () => {
  return (
      <header className={s.header}>
        <div className={s.logoWrapper}>
          <img src='https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/react-tutorial/9oI3y6pGdIOlO0cYhTeldDBqpWu1?avatarupdatetimestamp=undefined' alt='logo'/>
        </div>
        <div className={s.logoTitle}>
            <h1>social<span>reactor</span></h1>
        </div>
      </header>
  )
}

export default Header;