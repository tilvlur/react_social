import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
  requestUserProfile,
  requestStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {
  withAuthRedirectProfile,
} from '../../hoc/withAuthRedirect';
import {
  getAuthorizedUserId,
  getProfileStatus,
  getUserProfile, isDataFormError, isUserAuth,
} from '../../redux/selectors';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 2;
      userId = this.props.authorizedUserId;
    }
    this.props.requestUserProfile(userId);
    this.props.requestStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return <Profile {...this.props}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                    profile={this.props.profile}
                    isDataFormError={this.props.isDataFormError}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus} />;
  }
}

const mapStateToProps = state => {
  return {
    profile: getUserProfile(state),
    isDataFormError: isDataFormError(state),
    status: getProfileStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: isUserAuth(state),
  };
};

export default compose(
    withRouter,
    connect(mapStateToProps,
        {
          requestUserProfile,
          requestStatus,
          updateStatus,
          savePhoto,
          saveProfile,
        }),
    withAuthRedirectProfile,
)(ProfileContainer);