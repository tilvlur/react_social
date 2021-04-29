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
import {authMe} from './redux/auth-reducer';

class App extends React.Component {
  componentDidMount() {
    this.props.authMe()
  }

  render() {
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
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

export default connect(null, {authMe})(App);