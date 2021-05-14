import {authMe, login} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
  isAuth: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
        isAuth: action.authStatus,
      };

    default:
      return state;
  }
};

export default appReducer;

export const initializedSuccess = (authStatus) => ({
  type: INITIALIZED_SUCCESS,
  authStatus,
});

export const initializeApp = () => dispatch => {
  const authMePromise = dispatch(authMe());

  Promise.all([authMePromise])
      .then(() => dispatch(initializedSuccess(true)))
      .catch(() => dispatch(initializedSuccess(false)));
};