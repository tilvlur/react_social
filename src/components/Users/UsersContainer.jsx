import {
  follow,
  unfollow,
  changePagesPart,
  toggleFollowingInProgress,
  requestUsers,
  getChangedPageUsers,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {
  getEndDisplayedPagesCount, getIteratorUsersValue,
  getStartDisplayedPagesCount,
  getTotalUsersCount,
  getUsers, getUsersCurrentPage,
  getUsersPageSize, isFollowingInProgress, isUsersFetching,
} from '../../redux/selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  };

  onPageChanged = (pageNumber) => {
    this.props.getChangedPageUsers(pageNumber);
  };

  render = () => <>
    {/*{this.props.isFetching ? <Preloader /> : null}*/}
    {this.props.isFetching && <Preloader />}
    <Users onPageChanged={this.onPageChanged}
           totalUsersCount={this.props.totalUsersCount}
           pageSize={this.props.pageSize}
           startDisplayedPagesCount={this.props.startDisplayedPagesCount}
           endDisplayedPagesCount={this.props.endDisplayedPagesCount}
           currentPage={this.props.currentPage}
           iteratorValue={this.props.iteratorValue}
           changePagesPart={this.props.changePagesPart}
           users={this.props.users}
           follow={this.props.follow}
           unfollow={this.props.unfollow}
           followingInProgress={this.props.followingInProgress}
           toggleFollowingInProgress={this.props.toggleFollowingInProgress}
    />
  </>;
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getUsersPageSize(state),
    currentPage: getUsersCurrentPage(state),
    startDisplayedPagesCount: getStartDisplayedPagesCount(state),
    endDisplayedPagesCount: getEndDisplayedPagesCount(state),
    iteratorValue: getIteratorUsersValue(state),
    isFetching: isUsersFetching(state),
    followingInProgress: isFollowingInProgress(state),
  };
};

/*const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => dispatch(setUsersAC(users)),
    setTotalUsersCount: totalUsersCount => dispatch(
        setTotalUsersCountAC(totalUsersCount)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    changePagesPart: changePagesPart => dispatch(
        changePagesPartAC(changePagesPart)),
    follow: userId => dispatch(followAC(userId)),
    unfollow: userId => dispatch(unfollowAC(userId)),
    toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching)),
  };
};*/

/*
const UsersContainer = connect(mapStateToProps, {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  changePagesPart,
  follow,
  unfollow,
  toggleIsFetching,
})(UsersClassContainer);

export default UsersContainer;*/

export default connect(mapStateToProps, {
  changePagesPart,
  follow,
  unfollow,
  toggleFollowingInProgress,
  getUsers: requestUsers,
  getChangedPageUsers,
})(UsersContainer);