const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const CHANGE_PAGES_PART = 'NEXT_PAGES_PART';

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 7,
  currentPage: 1,
  startDisplayedPagesCount: 1,
  endDisplayedPagesCount: 10,
  iteratorValue: 10,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {...state, users: action.users};
    }

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount};
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage};
    }

    case CHANGE_PAGES_PART: {
      return {
        ...state,
        currentPage: action.changePagesPart.currentPage,
        startDisplayedPagesCount: action.changePagesPart.startDisplayedPagesCount,
        endDisplayedPagesCount: action.changePagesPart.endDisplayedPagesCount,
      };
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

export const setUsersAC = users => ({type: SET_USERS, users});
export const setCurrentPageAC = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const changePagesPartAC = changePagesPart => ({
  type: CHANGE_PAGES_PART,
  changePagesPart,
});
export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});