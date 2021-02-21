import {
  followAC,
  changePagesPartAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import React from 'react';
import axios from 'axios';
import Users from './Users';

class UsersClassContainer extends React.Component {
  componentDidMount = () => {
    this.props.users.length === 0 && axios({
      method: 'get',
      url: `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then(responseValue => {
              this.props.setUsers(responseValue.data.items);
              this.props.setTotalUsersCount(responseValue.data.totalCount);
            },
        );
  };
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios({
      method: 'get',
      url: `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then(responseValue => this.props.setUsers(responseValue.data.items));
  };
  render = () => <Users onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        startDisplayedPagesCount={this.props.startDisplayedPagesCount}
                        endDisplayedPagesCount={this.props.endDisplayedPagesCount}
                        currentPage={this.props.currentPage}
                        iteratorValue={this.props.iteratorValue}
                        changePagesPart={this.props.changePagesPart}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />;
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassContainer);

export default UsersContainer;