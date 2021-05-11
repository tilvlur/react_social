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
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, {initializeApp})(App);