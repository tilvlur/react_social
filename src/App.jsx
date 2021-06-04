import './App.scss';
import React, {Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {isAppInitialized, isUserAppAuth} from './redux/selectors';
import store from './redux/redux-store';
import {withSuspense} from './hoc/withSuspense';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const ProfileContainer = React.lazy(
    () => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(
    () => import('./components/Dialogs/DialogsContainer'));

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
                   render={withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?'
                   render={withSuspense(ProfileContainer)} />
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

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const ReactSocialApp = props => {
  return (
      <BrowserRouter>
        <React.StrictMode>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </React.StrictMode>
      </BrowserRouter>);
};

export default ReactSocialApp;

