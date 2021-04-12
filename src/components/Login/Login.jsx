import React from 'react';
import s from './Login.module.scss';
import LoginForm from './LoginForm';

const Login = (props) => {
  return (
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm login={props.login} />
      </div>
  );
};

export default Login;