import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

  const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

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
                      value={props.dialogsPage.newMessageText}/>
          </div>
          <button onClick={onAddMessageBtnClick}>Add text</button>
        </div>
      </div>
  );
};

export default Dialogs;