import './App.scss';
import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavbarContainer />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <DialogsContainer />} />
          <Route path='/profile'
                 render={() => <Profile />} />
          <Route path='/users' render={() => <Users />} />
        </div>
        <Footer />
      </div>
  );
};

export default App;
