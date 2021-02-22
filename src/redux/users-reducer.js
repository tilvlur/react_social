const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const CHANGE_PAGES_PART = 'NEXT_PAGES_PART';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 7,
  currentPage: 1,
  startDisplayedPagesCount: 1,
  endDisplayedPagesCount: 10,
  iteratorValue: 10,
  isFetching: false,
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }

    default:
      return state;
  }
};

export default usersReducer;

export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const changePagesPart = changePagesPart => ({
  type: CHANGE_PAGES_PART,
  changePagesPart,
});
export const follow = userId => ({type: FOLLOW, userId});
export const unfollow = userId => ({type: UNFOLLOW, userId});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})