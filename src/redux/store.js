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
  },

  _callSubscriber() {
    console.log('no observers');
  },

  getState() {
    return this._state;
  },

  subscriber(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case 'UPDATE-NEW-POST-TEXT':
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case 'ADD-POST':
        let post = {
          id: 4,
          message: this._state.profilePage.newPostText,
          likesCount: 12,
        };
        this._state.profilePage.posts.push(post);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case 'UPDATE-NEW-MESSAGE-TEXT':
        this._state.dialogsPage.newMessageText = action.newText;
        this._callSubscriber(this._state);
        break;
      case 'ADD-MESSAGE':
        let message = {
          id: 6,
          message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(message);
        this._callSubscriber(this._state);
        this._state.dialogsPage.newMessageText = '';
        break;
    }
  },
};

export default store;