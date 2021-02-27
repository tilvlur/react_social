import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14121;
    }
    axios({
      method: 'get',
      url: `https://social-network.samuraijs.com/api/1.0/profile/` + userId,
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then(responseValue => {
          // debugger
          this.props.setUserProfile(responseValue.data);
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