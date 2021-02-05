const store = {

  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It is my first post', likesCount: 5},
        {id: 3, message: 'It is very nice', likesCount: 22},
      ],
      newPostText: '',
    },

    dialogPage: {
      store: [
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
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('no observers');
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },

  addPost() {
    let post = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likesCount: 12,
    };

    this._state.profilePage.posts.push(post);
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },

  updateNewMessageText(newText) {
    this._state.dialogPage.newMessageText = newText;
    this._callSubscriber();
  },

  addMessage() {
    let message = {
      id: 6,
      message: this._state.dialogPage.newMessageText,
    };

    this._state.dialogPage.messages.push(message);
    this._callSubscriber();
    this._state.dialogPage.newMessageText = '';
  },
};

export default store;