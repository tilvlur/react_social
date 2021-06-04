import React from 'react';
import s from './Users.module.scss';
import UserCard from './UserCard/UserCard';
import Paginator from '../common/Paginator/Paginator';

const Users = (props) => {

  return (
      <div className={s.usersWrapper}>
        <h3>make <span>friends</span></h3>
        <Paginator  {...props}/>
        {props.users.map(u =>
            <UserCard id={u.id}
                      key={u.id}
                      user={u}
                      follow={props.follow}
                      unfollow={props.unfollow}
                      followingInProgress={props.followingInProgress}
                      toggleFollowingInProgress={props.toggleFollowingInProgress}
            />,
        )}
        {/*<Paginator {...props} />*/}
      </div>
  );
};

export default Users;