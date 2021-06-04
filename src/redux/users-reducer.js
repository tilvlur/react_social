import {followAPI, usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/object-helpers';

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const CHANGE_PAGES_PART = 'NEXT_PAGES_PART';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  totalUsersCount: 0,
  pageSize: 7,
  currentPage: 1,
  // startDisplayedPagesCount: 1,
  // endDisplayedPagesCount: 10,
  // iteratorValue: 10,
  pagesPortionSize: 10,
  isFetching: false,
  followingInProgress: [],
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
      return {
        ...state,
        users: updateObjectInArray(state.users, 'id', action.userId,
            {followed: true}),
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
      };

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return action.isFetching
          ? {
            ...state,
            followingInProgress: [...state.followingInProgress, action.id],
          }
          : {
            ...state,
            followingInProgress: state.followingInProgress.filter(
                id => id !== action.id),
          };
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

export const followSuccess = userId => ({type: FOLLOW, userId});
export const unfollowSuccess = userId => ({type: UNFOLLOW, userId});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingInProgress = (isFetching, id) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id,
});

export const requestUsers = (pageSize, currentPage) => async dispatch => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.requestUsers(pageSize, currentPage);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
};

export const getChangedPageUsers = pageNumber => async dispatch => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.requestUsers(initialState.pageSize, pageNumber);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
};

const followUnfollowFlow = async (
    apiMethod, userId, dispatch, actionCreator) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  response.resultCode === 0 &&
  dispatch(actionCreator(userId));
  dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = userId => async dispatch => {
  let apiMethod = followAPI.followUser.bind(followAPI);
  await followUnfollowFlow(apiMethod, userId, dispatch, followSuccess);
};

export const unfollow = userId => async dispatch => {
  let apiMethod = followAPI.unfollowUser.bind(followAPI);
  await followUnfollowFlow(apiMethod, userId, dispatch, unfollowSuccess);
};