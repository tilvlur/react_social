import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?'
                 render={() => <ProfileContainer />} />
          <Route path='/users'
                 render={() => <UsersContainer />} />
        </div>
        <Footer />
      </div>
  );
};

export default App;
