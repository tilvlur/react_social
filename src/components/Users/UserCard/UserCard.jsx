import React from 'react';
import s from './UserCard.module.scss';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

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
              ? <button onClick={() => {
                axios({
                  method: 'DELETE',
                  url: `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  headers: {
                    'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
                  },
                  withCredentials: true,
                })
                    .then(response => {
                      response.data.resultCode === 0 &&
                      props.unfollow(props.user.id);
                    });
              }}>Unfollow</button>
              : <button onClick={() => {
                axios({
                  method: 'POST',
                  url: `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                  headers: {
                    'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
                  },
                  withCredentials: true,
                })
                    .then(response => {
                      response.data.resultCode === 0 &&
                      props.follow(props.user.id);
                    });
              }}>Follow</button>}
        </div>
      </div>
  );
};

export default UserCard;