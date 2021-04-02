import React from 'react';
import s from './Login.module.scss';
import {Formik, Form, Field} from 'formik';

const LoginForm = (props) => {
  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(values);
    props.login(values);
  };
  return (
      <Formik
          initialValues={{
            email: 'myLogin',
            password: '123',
            rememberMe: false,
          }}
          onSubmit={onSubmit}
          // onSubmit={(values => window.alert(JSON.stringify(values)))}
      >
        {(props) => (
            <Form>
              <div>
                <Field type='text' name='email' placeholder='Login' />
              </div>
              <div>
                <Field type='password' name='password' placeholder='Password' />
              </div>
              <div>
                <Field type='checkbox' name='rememberMe' /> remember me
              </div>
              <button type='submit'>Submit</button>
              {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
            </Form>)
        }
      </Formik>);
};

const Login = (props) => {
  return (
      <div className={s.login}>
        <h1>Login</h1>
        <LoginForm login={props.login} />
      </div>
  );
};

export default Login;