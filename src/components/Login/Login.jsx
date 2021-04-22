import React from 'react';
import s from './Login.module.scss';
import LoginForm from './LoginForm';
import {Redirect} from 'react-router-dom';

const Login = (props) => {

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm login={props.login} />
      </div>
  );
};

export default Login;