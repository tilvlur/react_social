import {Field, Form, Formik} from 'formik';
import React from 'react';
import {required} from '../../../utils/validators';
import {Button, Textarea} from '../../common/FormsControls/FormsControls';
import * as Yup from 'yup';

const NewPostForm = (props) => {
  const addNewPost = (values, actions) => {
    props.addNewPost(values.post);
    // console.log(JSON.stringify(values, null, 2));
    // actions.resetForm();
  };

  const NewPostSchema = Yup.object().shape({
    post: Yup.string()
        .min(2, 'To short!')
        .max(10, 'To long10!')
        // .required('Required!'),
  });
  return (
      <Formik
          initialValues={{
            post: '',
          }}
          validationSchema={NewPostSchema}
          onSubmit={addNewPost}
      >
        {(props) => (
            <Form>
              <Field component={Textarea}
                     name='post'
                     placeholder='Start a new post...'
                    /* validate={required}*/ />
              {/*{props.errors.post && props.touched.post && props.errors.post}*/}
              <Button type='submit' disabled={!props.values.post}>Add post
              </Button>
             {/* <pre>{JSON.stringify(props, null, 2)}</pre>
              {console.log(JSON.stringify(props, null, 2))}*/}
            </Form>
        )}
      </Formik>
  );
};

export default NewPostForm;