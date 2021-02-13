import React from 'react';
import s from './UserCard.module.scss';

const UserCard = (props) => {
  return (
      <div className={s.userCard}>
        <div className={s.avatar}>
          <img src={props.user.avatar} alt='Avatar' />
        </div>
        <div className={s.userInfo}>
          <div className={s.nameStatus}>
            <h4>{props.user.fullName}</h4>
            <p>{props.user.status} </p>
          </div>
          <div className={s.location}>
            <p>Country: <span>{props.user.location.country}</span></p>
            <p>City: <span>{props.user.location.city}</span></p>
          </div>
        </div>
        <div>
          {props.user.followed
              ? <button
                  onClick={() => props.unfollow(props.user.id)}>Follow</button>
              : <button
                  onClick={() => props.follow(props.user.id)}>Unfollow</button>}
        </div>
      </div>
  );
};

export default UserCard;