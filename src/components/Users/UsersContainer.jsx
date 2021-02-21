import Users from './Users';
import {
  followAC,
  changePagesPartAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    startDisplayedPagesCount: state.usersPage.startDisplayedPagesCount,
    endDisplayedPagesCount: state.usersPage.endDisplayedPagesCount,
    iteratorValue: state.usersPage.iteratorValue,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    setTotalUsersCount: (totalUsersCount) => dispatch(
        setTotalUsersCountAC(totalUsersCount)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    changePagesPart: changePagesPart => dispatch(changePagesPartAC(changePagesPart)),
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;