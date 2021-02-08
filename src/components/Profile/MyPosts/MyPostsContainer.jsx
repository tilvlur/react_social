import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPostContainer = (props) => {

  const updateNewPostText = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  const addPost = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  };

  return (
      <MyPosts posts={props.store.getState().profilePage.posts}
               newPostText={props.store.getState().profilePage.newPostText}
               updateNewPostText={updateNewPostText}
               addPost={addPost}/>
  );
};

export default MyPostContainer;