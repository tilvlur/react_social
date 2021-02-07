const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      let message = {
        id: 6,
        message: state.newMessageText,
      };
      state.messages.push(message);
      state.newMessageText = '';
      return state;

    default:
      return state;
  }
};

export default dialogReducer;

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});