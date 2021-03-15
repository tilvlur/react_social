import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 11454;
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

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile}),
)(ProfileContainer);