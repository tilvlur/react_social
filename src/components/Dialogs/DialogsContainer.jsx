import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = state => ({dialogsPage: state.dialogsPage});

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageText: text => dispatch(updateNewMessageTextActionCreator(text)),
    addMessage: () => dispatch(addMessageActionCreator()),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;