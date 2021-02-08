const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It is my first post', likesCount: 5},
    {id: 3, message: 'It is very nice', likesCount: 22},
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case ADD_POST: {
      let post = {
        id: 4,
        message: state.newPostText,
        likesCount: 12,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(post);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    default:
      return state;
  }
};

export default profileReducer;

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const addPostActionCreator = () => ({type: ADD_POST});