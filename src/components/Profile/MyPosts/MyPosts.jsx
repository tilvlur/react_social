import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  const postsElements = props.posts.map(
      p => <Post message={p.message} likesCount={p.likesCount}/>);

  const onPostChange = () => {
    let newText = postsTextArea.current.value;
    props.updateNewPostText(newText);
  };

  const onButtonClick = () => {
    props.addPost();
  };

  const postsTextArea = React.createRef();

  return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} ref={postsTextArea}
                      value={props.newPostText}/>
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
