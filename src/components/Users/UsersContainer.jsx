import {
  follow,
  changePagesPart,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  unfollow, toggleIsFetching, toggleFollowingInProgress,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
        .then(response => {
              this.props.toggleIsFetching(false);
              this.props.setUsers(response.items);
              this.props.setTotalUsersCount(response.totalCount);
            },
        );
  };
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.pageSize, pageNumber)
        .then(response => {
              this.props.toggleIsFetching(false);
              this.props.setUsers(response.items);
            },
        );
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
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    startDisplayedPagesCount: state.usersPage.startDisplayedPagesCount,
    endDisplayedPagesCount: state.usersPage.endDisplayedPagesCount,
    iteratorValue: state.usersPage.iteratorValue,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
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
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  changePagesPart,
  follow,
  unfollow,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer);