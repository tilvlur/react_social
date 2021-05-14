import './App.scss';
import React from 'react';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {isAppInitialized, isUserAppAuth} from './redux/selectors';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Route exact path='/'
                   render={() => (
                       <div className='testing'>
                         <div>To test this site you can log in using the
                           following
                           data:
                         </div>
                         <div>login: <span>free@samuraijs.com</span></div>
                         <div>password: <span>free</span></div>
                       </div>)} />
            <Route path='/dialogs'
                   render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer />} />
            <Route path='/users'
                   render={() => <UsersContainer />} />
            <Route path='/login'
                   render={() => <LoginContainer />} />
          </div>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: isAppInitialized(state),
  isAuth: isUserAppAuth(state),
});

export default connect(mapStateToProps, {initializeApp})(App);