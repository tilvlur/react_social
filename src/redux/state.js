const state = {

  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 11},
      {id: 2, message: 'It is my first post', likesCount: 5},
      {id: 3, message: 'It is very nice', likesCount: 22},
    ],
    newPostText: '',
  },

  dialogsPage: {
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
    newMessageText: '',
  },

};

let rerenderEntireTree = () => {
  console.log('no subscribers');
};


export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addPost = () => {
  let post = {
    id: 4,
    message: state.profilePage.newPostText,
    likesCount: 12,
  };

  state.profilePage.posts.push(post);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let message = {
    id: 6,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(message);
  rerenderEntireTree(state);
  state.dialogsPage.newMessageText = '';

};

export const subscriber = (observer) => {
  rerenderEntireTree = observer;
};

export default state;