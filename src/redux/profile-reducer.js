const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {

  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    case ADD_POST:
      let post = {
        id: 4,
        message: state.newPostText,
        likesCount: 12,
      };
      state.posts.push(post);
      state.newPostText = '';
      return state

    default:
      return state
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