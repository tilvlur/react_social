import {Field, Form, Formik} from 'formik';
import {Button, Input} from '../common/FormsControls/FormsControls';
import React from 'react';
import * as Yup from 'yup';
import s from './Login.module.scss';

const LoginForm = (props) => {
  const login = (values, actions) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(values);
    props.login(values, actions);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please, enter email here')
        .required('Required!')
        .min(2, '*to short!'),
    password: Yup.string()
        .required('Required!')
        .max(10, 'To long!'),
  });

  return (
      <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false,
          }}
          validationSchema={LoginSchema}
          onSubmit={login}
          // onSubmit={(values => window.alert(JSON.stringify(values)))}
      >
        {({status, isSubmitting}) => (
            <Form>
              {status && <>
                <div className={s.serverError}>
                  {status && status.error}
                </div>
              </>}
              <div>
                <Field component={Input} type='email' name='email'
                       placeholder='Enter your email here' />
              </div>
              <div>
                <Field component={Input} type='password' name='password'
                       placeholder='Password' />
              </div>
              <div className={s.checkboxWrapper}>
                <Field type='checkbox' name='rememberMe' id='rememberMe' />
                <label htmlFor='rememberMe'>remember me</label>
              </div>

              <Button type='submit'
                      disabled={isSubmitting}>Submit</Button>
              {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
            </Form>)
        }
      </Formik>);
};

export default LoginForm;