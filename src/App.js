import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
} from './redux/state';
import {Route} from 'react-router-dom';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                        updateNewMessageText={updateNewMessageText}
                                        addMessage={addMessage}/>}/>
          <Route path='/profile'
                 render={() => <Profile posts={props.state.profilePage.posts}
                                        newPostText={props.state.profilePage.newPostText}
                                        updateNewPostText={updateNewPostText}
                                        addPost={addPost}/>}/>
        </div>
      </div>
  );
};

export default App;
