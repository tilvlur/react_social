const initialState = {
  navbar: [
    {id: 1, navbarItem: 'Profile', link: '/profile'},
    {id: 2, navbarItem: 'Users', link: '/users'},
    {id: 3, navbarItem: 'Messages', link: '/dialogs'},
    {id: 4, navbarItem: 'News', link: '/news'},
    {id: 5, navbarItem: 'Music', link: '/music'},
    {id: 6, navbarItem: 'Settings', link: '/settings'},
  ],
};

const navbarReducer = (state = initialState, action) => {

  return state;
};

export default navbarReducer;