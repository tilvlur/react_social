import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

  const updateNewMessageText = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  const addMessage = () => {
    const action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  const state = props.store.getState().dialogsPage;

  return <Dialogs state={state}
                  updateNewMessageText={updateNewMessageText}
                  addMessage={addMessage}/>;
};

export default DialogsContainer;