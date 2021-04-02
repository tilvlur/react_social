// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

const initialState = {
  dialogs: [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ],
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How is your React?'},
    {id: 3, message: 'Very well!'},
    {id: 4, message: 'Yo!'},
    {id: 5, message: 'Yo'},
  ],
  /*newMessageText: '',*/
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
      /*case UPDATE_NEW_MESSAGE_TEXT:
        return {
          ...state,
          newMessageText: action.newText,
        };*/
    case ADD_NEW_MESSAGE:
      let copyMessages = [...state.messages];
      let newMessageId = copyMessages.pop().id;
      newMessageId++;
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: newMessageId, message: action.message},
        ],
      };

    default:
      return state;
  }
};

export default dialogsReducer;

/*export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});*/
export const addNewMessage = (message) => ({type: ADD_NEW_MESSAGE, message});