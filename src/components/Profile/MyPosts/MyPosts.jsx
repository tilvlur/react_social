import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  const postsElements = props.posts.map(
      p => <Post message={p.message} likesCount={p.likesCount}/>);

  const textareaPost = React.createRef();

  const onTextareaPostChange = () => {
    let text = textareaPost.current.value;
    props.updateNewPostText(text);
  };

  const onAddPostBtnClick = () => {
    props.addPost();
  }

  return (
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={onTextareaPostChange}
                      ref={textareaPost}
                      value={props.newPostText}/>
          </div>
          <div>
            <button onClick={onAddPostBtnClick}>Add post</button>
          </div>
        </div>
        <div>
          {postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
