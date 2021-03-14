import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14121;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  };
};

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,
    {getUserProfile})(WithUrlDataContainerComponent);