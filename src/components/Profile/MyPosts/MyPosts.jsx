import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.scss';
import NewPostForm from './NewPostForm';

const MyPosts = React.memo(props => {
  const postsElements = props.profilePage.posts.map(
      p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const textareaPost = React.createRef();

  /*const onTextareaPostChange = () => {
    let text = textareaPost.current.value;
    props.updateNewPostText(text);
  };

  const onAddPostBtnClick = () => {
    props.addPost();
  };*/

  return (
      <div className={s.postsBlock}>
        <h3>my <span>posts</span></h3>
        <div>
          {/*<div>
            <textarea onChange={onTextareaPostChange}
                      ref={textareaPost}
                      value={props.profilePage.newPostText} />
          </div>
          <div>
            <button onClick={onAddPostBtnClick}>Add post</button>
          </div>*/}
          <NewPostForm addNewPost={props.addNewPost} />
        </div>
        <div>
          {postsElements}
        </div>
      </div>
  );
});

export default MyPosts;
