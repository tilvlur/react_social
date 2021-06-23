import {profileAPI} from '../api/api';
import {refreshLoginPhoto} from './auth-reducer';

// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_NEW_POST = 'ADD_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_DATA_FORM_ERROR = 'SET_DATA_FORM_ERROR';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It is my first post', likesCount: 5},
    {id: 3, message: 'It is very nice', likesCount: 22},
  ],
  newPostText: '',
  profile: null,
  isDataFormError: false,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
      /*case UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostText: action.newText,
        };

      case ADD_POST:
        return {
          ...state,
          posts: [
            ...state.posts,
            {id: 4, message: state.newPostText, likesCount: 12},
          ],
          newPostText: '',
        };*/

    case ADD_NEW_POST:
      let copyPosts = [...state.posts];
      let lastPostId = copyPosts.pop().id;
      let newPostId = ++lastPostId;

      return {
        ...state,
        posts: [
          ...state.posts,
          {id: newPostId, message: action.post, likesCount: 12},
        ],
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId),
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_DATA_FORM_ERROR:
      return {
        ...state,
        isDataFormError: action.isError,
      }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export default profileReducer;

/*export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const addPostActionCreator = () => ({type: ADD_POST});*/
export const addNewPostActionCreator = post => ({type: ADD_NEW_POST, post});
export const deletePostActionCreator = postId => ({type: DELETE_POST, postId});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setDataFormError = isError => ({type: SET_DATA_FORM_ERROR, isError})
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos});
export const setStatus = status => ({type: SET_STATUS, status});

export const requestUserProfile = userId => async (dispatch) => {
  let responseValue = await profileAPI.requestUserProfile(userId);
  dispatch(setUserProfile(responseValue));
};

export const savePhoto = file => async dispatch => {
  let response = await profileAPI.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
    dispatch(refreshLoginPhoto(response.data.photos.small));
  }
};

export const saveProfile = (profile, actions) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.resultCode === 0) {
    dispatch(requestUserProfile(userId));
    dispatch(setDataFormError(false))
  } else {
    dispatch(setDataFormError(true));
    debugger
    const fieldsErrorsArr = response.messages;
    const fieldsErrorsArrMap = fieldsErrorsArr.map(errString => {
      return errString.match(/(?<=>)\w+/)[0].toLowerCase() + 'Error';
    })
    const fieldsErrorsObj = {};
    for (let i = 0; i < fieldsErrorsArrMap.length; i++) {
      fieldsErrorsObj[fieldsErrorsArrMap[i]] = 'Invalid url format';
    }
    actions.setStatus(fieldsErrorsObj);
  }
};

export const requestStatus = userId => async dispatch => {
  let response = await profileAPI.requestStatus(userId);
  dispatch(setStatus(response));
};

export const updateStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
