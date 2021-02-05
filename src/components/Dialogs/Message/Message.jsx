import s from './Message.module.css';
import React from 'react';

const Message = (props) => {
  return (
      <div className={s.message}>
        {props.message}
      </div>
  );
};

export default Message;