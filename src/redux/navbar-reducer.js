const initialState = {
  navbar: [
    {id: 1, navbarItem: 'Profile', link: '/profile'},
    {id: 2, navbarItem: 'Messages', link: '/dialogs'},
    {id: 3, navbarItem: 'News', link: '/news'},
    {id: 4, navbarItem: 'Music', link: '/music'},
    {id: 5, navbarItem: 'Settings', link: '/settings'},
  ],
};

const navbarReducer = (state = initialState, action) => {

  return state;
};

export default navbarReducer;