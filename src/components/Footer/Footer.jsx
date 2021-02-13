import React from 'react';
import s from './Footer.module.scss';

const Footer = (props) => {
  return (
      <div className={s.footerWrapper}>
        <div className={s.copyright}>
          &copy; Social reactor 2021. All right reserved.
        </div>
      </div>
  );
};

export default Footer;