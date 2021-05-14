import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
  requestUserProfile,
  requestStatus,
  updateStatus,
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
  getUserProfile, isUserAuth,
} from '../../redux/selectors';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      // userId = 2;
      userId = this.props.authorizedUserId;
    }
    this.props.requestUserProfile(userId);
    this.props.requestStatus(userId);
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
    profile: getUserProfile(state),
    status: getProfileStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuth: isUserAuth(state),
  };
};

export default compose(
    withRouter,
    connect(mapStateToProps, {requestUserProfile, requestStatus, updateStatus}),
    withAuthRedirectProfile,
)(ProfileContainer);