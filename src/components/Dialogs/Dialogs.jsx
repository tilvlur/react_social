import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

  const onTextareaMessageChange = (e) => {
    let text = e.target.value; //or currentTarget
    props.updateNewMessageText(text);
  };

  const onAddMessageBtnClick = () => {
    props.addMessage();
  };

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}

          <div>
            <textarea onChange={onTextareaMessageChange}
                      value={props.state.newMessageText}/>
          </div>
          <button onClick={onAddMessageBtnClick}>Add text</button>
        </div>
      </div>
  );
};

export default Dialogs;