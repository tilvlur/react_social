import {authAPI, profileAPI} from '../api/api';
import React from 'react';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  userAvatar: null,
  isAuth: false,
  isFetching: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

export const setAuthUserData = (id, login, email, userAvatar, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: {id, login, email, userAvatar, isAuth},
});

export const authMe = () => (dispatch) => {
  authAPI.authMe()
      .then(response => {
        if (response.resultCode === 0) {
          let {id} = {...response.data};
          let userAuthorizedData = {...response.data};
          profileAPI.getUserProfile(id)
              .then(response => {
                let userPhoto = response.photos.small;
                userAuthorizedData = {...userAuthorizedData, userPhoto};
                let {id, login, email, userAvatar} = userAuthorizedData;
                dispatch(setAuthUserData(id, login, email, userAvatar, true));
              });
        }
      });
};

export const login = (values, actions) => (dispatch) => {
  authAPI.login(values)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(authMe());
        } else {
          let errorMessage = response.messages.length > 0
              ? response.messages[0]
              : 'Some error';
          /*actions.setErrors({
            email: 'Incorrect email or password',
            password: 'Incorrect email or password',
          });*/
          /*actions.setFieldError('email', 'Incorrect email');*/
          actions.setStatus({error: errorMessage});
        }
      })
      .then(() => {
        actions.setSubmitting(false);
      });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, null, false));
        }
      });
};