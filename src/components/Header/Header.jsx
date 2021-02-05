import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
      <header className={s.header}>
        <div className={s.imgWrapper}>
          <img src='https://storage.googleapis.com/indie-hackers.appspot.com/product-avatars/react-tutorial/9oI3y6pGdIOlO0cYhTeldDBqpWu1?avatarupdatetimestamp=undefined' alt='logo'/>
        </div>
      </header>
  )
}

export default Header;