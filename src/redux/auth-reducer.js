import {authAPI, profileAPI} from '../api/api';
import React from 'react';

const SET_AUTH_USER_DATA = 'react-social/auth/SET_AUTH_USER_DATA';
const REFRESH_LOGIN_PHOTO = 'react-social/auth/REFRESH_LOGIN_PHOTO';
const TOGGLE_IS_FETCHING = 'react-social/auth/TOGGLE_IS_FETCHING';

const initialState = {
  id: null,
  login: null,
  email: null,
  userAvatar: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case REFRESH_LOGIN_PHOTO:
      return {
        ...state,
        userAvatar: action.userAvatar,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.fetchingStatus,
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

export const refreshLoginPhoto = (userAvatar) => ({
  type: REFRESH_LOGIN_PHOTO,
  userAvatar,
})

export const toggleIsFetching = (fetchingStatus) => ({
  type: TOGGLE_IS_FETCHING,
  fetchingStatus,
});

export const authMe = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  return new Promise((resolve, reject) => {
    authAPI.authMe()
        .then(response => {
          if (response.resultCode === 0) {
            let {id} = {...response.data};
            let userAuthorizedData = {...response.data};
            profileAPI.requestUserProfile(id)
                .then(response => {
                  let userPhoto = response.photos.small;
                  userAuthorizedData = {...userAuthorizedData, userPhoto};
                  let {login, email} = userAuthorizedData;
                  dispatch(setAuthUserData(id, login, email, userPhoto, true));
                })
                .then(() => dispatch(toggleIsFetching(false)))
                .then(() => resolve());
          } else {
            dispatch(toggleIsFetching(false));
            reject();
          }
        });
  });
};

export const login = (values, actions) => async (dispatch) => {
  const response = await authAPI.login(values);
  if (response.resultCode === 0) {
    await dispatch(authMe());
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
  actions.setSubmitting(false);
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, null, false));
  }
};