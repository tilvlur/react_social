import React from 'react';
import s from './UserCard.module.scss';
import {NavLink} from 'react-router-dom';

const UserCard = (props) => {
  return (
      <div className={s.userCard}>
        <NavLink to={'/profile/' + props.id}>
          <div className={s.avatar}>
            <img src={props.user.photos.small != null
                ? props.user.photos.small
                : `https://robohash.org/${props.user.name}.png`}
                 alt='Avatar' />}
          </div>
        </NavLink>
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
              ? <button disabled={props.followingInProgress.some(
                  id => id === props.id)}
                        onClick={() => {
                          props.unfollow(props.id);
                        }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(
                  id => id === props.id)}
                        onClick={() => {
                          props.follow(props.id);
                        }}>Follow</button>}
        </div>
      </div>
  );
};

export default UserCard;