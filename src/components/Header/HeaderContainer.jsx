import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  render = () => <>
    <Header {...this.props} />
  </>;
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    email: state.auth.email,
    userAvatar: state.auth.userAvatar,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, {logout})(HeaderContainer);