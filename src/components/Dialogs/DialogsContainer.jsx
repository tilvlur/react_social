import Dialogs from './Dialogs';
import {
  addNewMessage,
  /*addMessageActionCreator,
  updateNewMessageTextActionCreator,*/
} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
});

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    // withAuthRedirect,
)(Dialogs);