import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
      <div className={s.item}>
        <div className={s.imageWrapper}>
          <img src='https://sun9-22.userapi.com/c853520/v853520752/13ebf4/9ulvd0hVyo4.jpg' alt='avatar'/>
        </div>
        <div className={s.message}>
          {props.message}
        </div>
        <div><span>Like</span> <span>Likes count: {props.likesCount}</span></div>
      </div>
  );
};

export default Post;