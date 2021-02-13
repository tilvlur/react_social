import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
  return (
      <div className={s.item}>
        <div className={s.imageWrapper}>
          <img src='https://robohash.org/tim.png' alt='avatar' />
        </div>
        <div className={s.message}>
          {props.message}
        </div>
        <div className={s.likeWrapper}>
          <div className={s.likeImgWrapper}>
            <img src='./img/like.svg' alt='Like' />
          </div>
          <span>{props.likesCount}</span>
        </div>
      </div>
  );
};

export default Post;