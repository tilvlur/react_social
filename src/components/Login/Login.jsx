import React from 'react';
import s from './Login.module.scss';
import LoginForm from './LoginForm';
import {Redirect} from 'react-router-dom';

const Login = ({isAuth, login}) => {

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm login={login} />
        <div className={s.testing}>
          <div>To test this site you can log in using the
            following
            data:
          </div>
          <div>login: <span>free@samuraijs.com</span></div>
          <div>password: <span>free</span></div>
        </div>
      </div>
  );
};

export default Login;