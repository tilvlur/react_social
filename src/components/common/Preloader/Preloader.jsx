import React from 'react';
import s from './Preloader.module.scss';
import preloader from '../../../assets/images/preloader35.png';

const Preloader = (props) => {
  return <div>
    <img className={s.preloader} src={preloader} alt='' />
  </div>
}

export default Preloader;