import React from 'react';
import s from './Users.module.scss';
import UserCard from './UserCard/UserCard';
import axios from 'axios';

class Users extends React.Component {

  /*const users = [
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
  ];*/

  /*if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
          .then((responseValue => props.setUsers(responseValue.data.items)));
      debugger
    }*/

  constructor(props) {
    super(props);
    this.props.users.length === 0 && axios({
      method: 'get',
      url: 'https://social-network.samuraijs.com/api/1.0/users',
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then((responseValue => this.props.setUsers(responseValue.data.items)));
  }

  /*getUsers = () => {
    /!*this.props.users.length === 0 &&*!/
    axios({
      method: 'get',
      url: 'https://social-network.samuraijs.com/api/1.0/users',
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then((responseValue => this.props.setUsers(responseValue.data.items)));
  };*/

  render = () => {
    return (
        <div className={s.usersWrapper}>
          <h3>make <span>friends</span></h3>
          {/*<button onClick={this.getUsers}>Get users</button>*/}
          {this.props.users.map(u =>
              <UserCard key={u.id}
                        user={u}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />,
          )}
        </div>
    );
  };
}

export default Users;