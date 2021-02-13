const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]};
    }

    case FOLLOW:
      // const stateCopy = {...state, users: [...state.users]};
      /*const stateCopy = {...state, users: state.users.map(u => {
        if (action.userId === u.id) u = {...u, followed: true};
        return u;
        })};*/
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;

export const setUsersActionCreator = users => ({type: SET_USERS, users});
export const followActionCreator = userId => ({type: FOLLOW, userId});
export const unfollowActionCreator = userId => ({type: UNFOLLOW, userId});