import {Field, Form, Formik} from 'formik';
import s from './Dialogs.module.scss';
import React from 'react';
import {Button, Textarea} from '../common/FormsControls/FormsControls';
import * as Yup from 'yup';

const NewMessageForm = (props) => {
  const addNewMessage = (values, actions) => {
    props.addMessage(values.message);
    // console.log(values);
    // actions.resetForm();
  };

  const NewMassageSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'To short!')
        .max(20, 'To long!')
        // .required('Enter your text!')
  })

  return (
      <Formik
          initialValues={{
            message: '',
          }}
          validationSchema={NewMassageSchema}
          onSubmit={addNewMessage}
      >
        {(props) => (
            <Form className={s.messages}>
              <Field component={Textarea}
                     name='message'
                     placeholder='Start a new message'
                  // value={}
              />
              <Button type='submit' disabled={!props.values.message}>Add text</Button>
              {/*<pre>{JSON.stringify(props, null, 2)}</pre>
              {console.log({props})}*/}
            </Form>)
        }

      </Formik>
  );
};

export default NewMessageForm;