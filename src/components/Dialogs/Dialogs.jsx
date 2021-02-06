import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

  const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

  const dialogsTextArea = React.createRef();

  const onMessageChange = () => {
    const action = {
      type: 'UPDATE-NEW-MESSAGE-TEXT',
      newText: dialogsTextArea.current.value,
    };
    props.dispatch(action);
  };

  const addMessage = () => {
    const action = {
      type: 'ADD-MESSAGE',
    };
    props.dispatch(action);
  };

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}

          <div>
            <textarea ref={dialogsTextArea}
                      onChange={onMessageChange}
                      value={props.dialogsPage.newMessageText}/>
          </div>
          <button onClick={addMessage}>Add text</button>
        </div>
      </div>
  );
};

export default Dialogs;