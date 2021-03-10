import {authAPI, profileAPI} from '../api/api';

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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export default authReducer;

export const setAuthUserData = (id, login, email, userAvatar) => ({
  type: SET_AUTH_USER_DATA,
  data: {id, login, email, userAvatar},
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
                dispatch(setAuthUserData(id, login, email, userAvatar));
              });
        }
      });
};