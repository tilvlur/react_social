import React from 'react';
import s from './Users.module.scss';
import UserCard from './UserCard/UserCard';

const Users = props => {
  const users = [
    {
      id: 1,
      fullName: 'Dmity Kazuberdin',
      avatar: `https://robohash.org/dmity.png`,
      followed: true,
      status: 'I\'m a boss',
      location: {city: 'Minsk', country: 'Belarus'},
    },
    {
      id: 2,
      fullName: 'Evgeny Popov',
      avatar: `https://robohash.org/evgeny.png`,
      followed: false,
      status: 'I\'m a boss too',
      location: {city: 'Orin', country: 'Russia'},
    },
    {
      id: 3,
      fullName: 'Timur Khrustalyov',
      avatar: `https://robohash.org/timur.png`,
      followed: false,
      status: 'IT is my life!',
      location: {city: 'Moscow', country: 'Russia'},
    },
    {
      id: 4,
      fullName: 'Natalya Khrustalyova',
      avatar: `https://robohash.org/natalya.fullname}.png`,
      followed: true,
      status: 'Accounting is what I like!!',
      location: {city: 'Tchaikovsky', country: 'USSR'},
    },
  ];

  if (props.users.length === 0) {
    props.setUsers(users);
  }

  return (
      <div className={s.usersWrapper}>
        <h3>make <span>friends</span></h3>
        {props.users.map(u =>
            <UserCard key={u.id}
                      user={u}
                      follow={props.follow}
                      unfollow={props.unfollow} />,
        )}
      </div>
  );
};

export default Users;