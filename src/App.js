import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {
  debugger
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <Dialogs
                     dialogsPage={props.store.getState().dialogsPage}
                     updateNewMessageText={props.store.updateNewMessageText.bind(
                         props.store)}
                     addMessage={props.store.addMessage.bind(props.store)}/>}/>
          <Route path='/profile'
                 render={() => <Profile
                     posts={props.store.getState().profilePage.posts}
                     newPostText={props.store.getState().profilePage.newPostText}
                     updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                     addPost={props.store.addPost.bind(props.store)}/>}/>
        </div>
      </div>
  );
};

export default App;
