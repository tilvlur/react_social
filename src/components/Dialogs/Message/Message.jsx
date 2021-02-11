import s from './Message.module.scss';
import React from 'react';

const Message = (props) => {
  return (
      <div className={s.message}>
        {props.message}
      </div>
  );
};

export default Message;