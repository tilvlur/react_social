import React from 'react';
import s from './Users.module.scss';
import UserCard from './UserCard/UserCard';
import axios from 'axios';

class Users extends React.Component {

  render = () => {
    return (
        <div className={s.usersWrapper}>
          <h3>make <span>friends</span></h3>
          {this.props.users.map(u =>
              <UserCard key={u.id}
                        user={u}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />,
          )}
        </div>
    );
  };

  componentDidMount = () => {
    this.props.users.length === 0 && axios({
      method: 'get',
      url: 'https://social-network.samuraijs.com/api/1.0/users',
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then((responseValue => this.props.setUsers(responseValue.data.items)));
  };
}

export default Users;