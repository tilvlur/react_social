import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
});

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: text => dispatch(updateNewMessageTextActionCreator(text)),
    addMessage: () => dispatch(addMessageActionCreator()),
  };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);