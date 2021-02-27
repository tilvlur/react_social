import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import Preloader from '../common/Preloader/Preloader';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios({
      method: 'GET',
      url: `https://social-network.samuraijs.com/api/1.0/auth/me`,
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
      withCredentials: true,
    })
        .then(response => {
          if (response.data.resultCode === 0) {
            let {id} = {...response.data.data};
            let userAuthorizedData = {...response.data.data};
            // this.props.setAuthUserData(id, login, email);
            axios({
              method: 'GET',
              url: `https://social-network.samuraijs.com/api/1.0/profile/${id}`,
              headers: {
                'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
              },
              withCredentials: true,
            })
                .then(response => {
                  let userPhoto = response.data.photos.small;
                  userAuthorizedData = {...userAuthorizedData, userPhoto};
                  let {id, login, email, userAvatar} = userAuthorizedData;
                  this.props.setAuthUserData(id, login, email, userAvatar);
                });
          }
        });

  }

  render = () => <>
    {!this.props.isAuth && <Preloader />}
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