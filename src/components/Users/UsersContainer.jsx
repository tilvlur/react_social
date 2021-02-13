import Users from './Users';
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    follow: userId => dispatch(followActionCreator(userId)),
    unfollow: userId => dispatch(unfollowActionCreator(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;