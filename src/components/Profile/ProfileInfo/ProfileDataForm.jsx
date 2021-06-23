import React from 'react';
import {Field, FieldArray, Form, Formik} from 'formik';
import {Button, Input} from '../../common/FormsControls/FormsControls';
import {act} from '@testing-library/react';

const ProfileDataForm = ({onSubmit, profile}) => {


  return (
      <Formik
          initialValues={{
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            aboutMe: profile.aboutMe,
            contacts: {
              facebook: profile.contacts.facebook,
              website: profile.contacts.website,
              vk: profile.contacts.vk,
              twitter: profile.contacts.twitter,
              instagram: profile.contacts.instagram,
              youtube: profile.contacts.youtube,
              github: profile.contacts.github,
              mainLink: profile.contacts.mainLink,
            }
          }}
          onSubmit={(values, actions) => onSubmit(values, actions)}>
        {(props) => (
            <Form>
              {props.status && <div>Ooops!! error!!! {props.status.error} </div>}
              <div>
                <div>
                  <span>Full name: </span>
                  <Field type='text'
                         name='fullName'
                         placeholder='Enter your name here' />
                </div>
                <div>
                  <span>Looking for a job: </span>
                  <Field type='checkbox'
                         name='lookingForAJob' />
                </div>
                <div>
                  <span>My professional skills: </span>
                  <Field as='textarea'
                         name='lookingForAJobDescription' />
                </div>
                <div>
                  <span>About me: </span>
                  <Field as='textarea'
                         name='aboutMe' />
                </div>
                <div>
                  Contacts: {Object.keys(profile.contacts).map(key => {
                  return <div key={key}>
                    {props.status && props.status.hasOwnProperty(key.toLowerCase() + 'Error') &&
                    <div>Error</div>}
                    <div>{key}:</div>
                    <Field type='text'
                           name={`contacts.${key}`} />
                  </div>;
                })}
                </div>
              </div>

              <Button type='submit'>Save</Button>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </Form>
        )}
      </Formik>

  );
};

export default ProfileDataForm;