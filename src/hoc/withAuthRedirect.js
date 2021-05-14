import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {isUserAuth} from '../redux/selectors';

const mapStateToPropsForRedirect = state => ({
  isAuth: isUserAuth(state),
});

export const withAuthRedirectProfile = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth && !this.props.match.params.userId) return <Redirect to={'/login'} />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};