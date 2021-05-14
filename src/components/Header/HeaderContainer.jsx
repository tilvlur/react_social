import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {
  getAuthIsFetching,
  getAuthUserAvatar,
  getAuthUserEmail,
  getAuthUserLogin, isUserAuth,
} from '../../redux/selectors';

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = state => {
  return {
    login: getAuthUserLogin(state),
    email: getAuthUserEmail(state),
    userAvatar: getAuthUserAvatar(state),
    isAuth: isUserAuth(state),
    isFetching: getAuthIsFetching(state),
  };
};

export default connect(mapStateToProps, {logout})(HeaderContainer);