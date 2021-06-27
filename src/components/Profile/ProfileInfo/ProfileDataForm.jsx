import React from 'react';
import {Field, FieldArray, Form, Formik} from 'formik';
import {
  Button,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.scss';

const ProfileDataForm = ({onSubmit, profile, isFetching}) => {

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
            },
          }}
          onSubmit={(values, actions) => onSubmit(values, actions)}>
        {(props) => {

          return (
              <Form>
                <div className={s.profileDataWrapper}>
                  <div className={s.profileData}>

                    <div className={s.profileDataBlock}>
                      <div className={s.profileDataHeaders}>
                        <span>profile info</span>
                      </div>

                      <div className={s.blockData}>
                        <span className={s.blockUnitTitle}>Full name:</span>
                        <span className={s.blockUnitValue}>
                        <Field component={Input} type='text' name='fullName'
                               placeholder='Enter your name here'
                               errorstyle='narrow' />
                      </span>
                      </div>
                      <div className={s.blockData}>
                      <span
                          className={s.blockUnitTitle}>Looking for a job:</span>
                        <span className={s.blockUnitValue}>
                        <Field type='checkbox'
                               name='lookingForAJob' />
                      </span>
                      </div>

                      <div className={s.blockDataDescription}>
                      <span
                          className={s.blockUnitTitle}>My professional skills:</span>
                        <div className={s.blockUnitDescription}>
                          <Field component={Textarea}
                                 name='lookingForAJobDescription'
                                 errorstyle='narrow' />
                        </div>
                      </div>

                      <div className={s.blockDataDescription}>
                        <span className={s.blockUnitTitle}>About me:</span>
                        <div className={s.blockUnitDescription}>
                          <Field component={Textarea}
                                 name='aboutMe'
                                 errorstyle='narrow' />
                        </div>
                      </div>

                    </div>


                    <div className={s.profileDataBlock}>
                      <div className={s.profileDataHeaders}>
                        <span>contacts</span>
                      </div>
                      {Object.keys(profile.contacts).map(key => {
                        return (
                            <div className={s.blockData} key={key}>
                              {/*{props.status && props.status.hasOwnProperty(
                                  `${key}Error`) &&
                              <div>{props.status[(`${key}Error`)]}</div>}*/}
                              <span className={s.blockUnitTitle}>{key}:</span>
                              <span className={s.blockUnitValue}>
                                <Field component={Input} type='text'
                                       name={`contacts.${key}`}
                                       placeholder=''
                                       errorstyle='narrow' />
                              </span>
                            </div>);
                      })}
                    </div>
                  </div>

                  <div className={s.buttonWrapper}>
                    <Button type='submit' disabled={isFetching}>Save</Button>
                  </div>
                  {/*<pre>{JSON.stringify(props, null, 2)}</pre>*/}
                </div>
              </Form>
          );
        }}
      </Formik>
  );
};

export default ProfileDataForm;