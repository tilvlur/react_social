import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import navbarReducer from './navbar-reducer';

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

    navbar: [
      {id: 1, navbarItem: 'Profile', link: '/profile'},
      {id: 2, navbarItem: 'Messages', link: '/dialogs'},
      {id: 3, navbarItem: 'News', link: '/news'},
      {id: 4, navbarItem: 'Music', link: '/music'},
      {id: 5, navbarItem: 'Settings', link: '/settings'},
    ],

  },

  _callSubscriber() {
    console.log('no observers');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbar = navbarReducer(this._state.navbar, action);

    this._callSubscriber(this._state);
  },
};

export default store;