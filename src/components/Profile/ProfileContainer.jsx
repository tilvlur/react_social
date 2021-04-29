import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 2;
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} />;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
)(ProfileContainer);