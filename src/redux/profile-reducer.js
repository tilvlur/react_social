import {profileAPI} from '../api/api';

// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It is my first post', likesCount: 5},
    {id: 3, message: 'It is very nice', likesCount: 22},
  ],
  newPostText: '',
  profile: null,
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

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
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
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId)
      .then(responseValue => {
        dispatch(setUserProfile(responseValue));
      });
};
export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response));
      });
};
export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status)
      .then(response => {
        if (response.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
};
