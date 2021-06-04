//App reducer
export const isAppInitialized = state => state.app.initialized;
export const isUserAppAuth = state => state.app.isAuth;

//Auth reducer
export const getAuthUserLogin = state => state.auth.login;
export const getAuthUserEmail = state => state.auth.email;
export const getAuthUserAvatar = state => state.auth.userAvatar;
export const isUserAuth = state => state.auth.isAuth;
export const getAuthIsFetching = state => state.auth.isFetching;

//Dialogs reducer
export const getDialogsPage = state => state.dialogsPage;

//Navbar reducer
export const getNavbar = state => state.navbar.navbar;

//Profile reducer
export const getProfilePage = state => state.profilePage;
export const getUserProfile = state => state.profilePage.profile;
export const getUserFullName = state => state.profilePage.profile.fullName;
export const getProfileStatus = state => state.profilePage.status;
export const getAuthorizedUserId = state => state.auth.id;

//Users reducer
export const getUsers = state => state.usersPage.users;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getUsersPageSize = state => state.usersPage.pageSize;
export const getUsersCurrentPage = state => state.usersPage.currentPage;
export const getStartDisplayedPagesCount = state => state.usersPage.startDisplayedPagesCount;
export const getEndDisplayedPagesCount = state => state.usersPage.endDisplayedPagesCount;
export const getIteratorUsersValue = state => state.usersPage.iteratorValue;
export const getPagesPortionSize = state => state.usersPage.pagesPortionSize;
export const isUsersFetching = state => state.usersPage.isFetching;
export const isFollowingInProgress = state => state.usersPage.followingInProgress;