import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {profileAPI} from '../../api/api';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14121;
    }
    profileAPI.getUserProfile(userId)
        .then(responseValue => {
          // debugger
          this.props.setUserProfile(responseValue);
        });
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);