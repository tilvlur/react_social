import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {authMe} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render = () => <>
    {/*{!this.props.isAuth && <Preloader />}*/}
    <Header {...this.props} />
  </>;
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    userAvatar: state.auth.userAvatar,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, {authMe})(HeaderContainer);