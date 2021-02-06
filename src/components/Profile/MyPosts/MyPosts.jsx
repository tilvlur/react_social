import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store';

const MyPosts = (props) => {
  const postsElements = props.profilePage.posts.map(
      p => <Post message={p.message} likesCount={p.likesCount}/>);

  const onPostChange = () => {
    const action = updateNewPostTextActionCreator(postsTextArea.current.value);
    props.dispatch(action);
  };

  const onButtonClick = () => {
    const action = addPostActionCreator();
    props.dispatch(action);
  };

  const postsTextArea = React.createRef();

  return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={postsTextArea}
                      value={props.profilePage.newPostText}/>
          </div>
          <div>
            <button onClick={onButtonClick}>Add post</button>
          </div>
        </div>
        <div>
          {postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
