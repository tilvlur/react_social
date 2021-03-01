import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {authAPI, profileAPI} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe()
        .then(response => {
          if (response.resultCode === 0) {
            let {id} = {...response.data};
            let userAuthorizedData = {...response.data};
            // this.props.setAuthUserData(id, login, email);
            profileAPI.getUserProfile(id)
                .then(response => {
                  let userPhoto = response.photos.small;
                  userAuthorizedData = {...userAuthorizedData, userPhoto};
                  let {id, login, email, userAvatar} = userAuthorizedData;
                  this.props.setAuthUserData(id, login, email, userAvatar);
                });
          }
        });

  }

  render = () => <>
    {/*{!this.props.isAuth && <Preloader />}*/}
    <Header {...this.props} />
  </>;
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    userAvatar: state.auth.userAvatar,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);