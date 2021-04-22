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

export const login = (values) => (dispatch) => {
  authAPI.login(values)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(authMe());
        }
      });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, null, false))
        }
      })
}