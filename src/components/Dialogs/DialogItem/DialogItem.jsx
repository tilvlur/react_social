import s from './DialogItem.module.scss';
import {NavLink} from 'react-router-dom';
import React from 'react';

const DialogItem = (props) => {
  return (
      <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
      </div>
  );
};

export default DialogItem;