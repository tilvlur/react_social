import React from 'react';
import s from './UserCard.module.scss';

const UserCard = (props) => {
  return (
      <div className={s.userCard}>
        <div className={s.avatar}>
          <img src={props.user.photos.small != null
              ? props.user.photos.small
              : `https://robohash.org/${props.user.name}.png`}
               alt='Avatar' />}
        </div>
        <div className={s.userInfo}>
          <div className={s.nameStatus}>
            <h4>{props.user.name}</h4>
            {props.user.status === null
                ? <p>I have no status!!</p>
                : <p>{props.user.status} </p>}
          </div>
          {<div className={s.location}>
            {props.user.location === undefined
                ? <p>Country: <span>I have no country</span></p>
                : <p>Country: <span>{props.user.location.country}</span></p>}
            {props.user.location === undefined
                ? <p>City: <span>I have no city</span></p>
                : <p>City: <span>{props.user.location.city}</span></p>}
          </div>}
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