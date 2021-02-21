import React from 'react';
import s from './Users.module.scss';
import UserCard from './UserCard/UserCard';
import axios from 'axios';

class Users extends React.Component {

  render = () => {
    const pagesCount = Math.ceil(
        this.props.totalUsersCount / this.props.pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    const pagesSlice = pages.slice(this.props.startDisplayedPagesCount - 1,
        this.props.endDisplayedPagesCount);

    const onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios({
        method: 'get',
        url: `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        headers: {
          'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
        },
      })
          .then(responseValue => this.props.setUsers(responseValue.data.items));
    };

    const onClickIterator = (e) => {
      switch (e.currentTarget.innerHTML) {
        case 'PREV': {
          const changePagesPart = {
            currentPage: this.props.currentPage - this.props.iteratorValue,
            startDisplayedPagesCount: this.props.startDisplayedPagesCount -
                this.props.iteratorValue,
            endDisplayedPagesCount: this.props.endDisplayedPagesCount -
                this.props.iteratorValue,
          };
          this.props.changePagesPart(changePagesPart);
          onPageChanged(changePagesPart.currentPage);
          break;
        }
        case 'NEXT': {
          if (pagesCount - this.props.currentPage >= this.props.iteratorValue) {
            const changePagesPart = {
              currentPage: this.props.currentPage + this.props.iteratorValue,
              startDisplayedPagesCount: this.props.startDisplayedPagesCount +
                  this.props.iteratorValue,
              endDisplayedPagesCount: this.props.endDisplayedPagesCount +
                  this.props.iteratorValue,
            };
            this.props.changePagesPart(changePagesPart);
            onPageChanged(changePagesPart.currentPage);
          } else {
            const changePagesPart = {
              currentPage: this.props.currentPage +
                  (pagesCount - this.props.currentPage),
              startDisplayedPagesCount: this.props.startDisplayedPagesCount +
                  (pagesCount - this.props.currentPage),
              endDisplayedPagesCount: this.props.endDisplayedPagesCount +
                  (pagesCount - this.props.currentPage),
            };
            this.props.changePagesPart(changePagesPart);
            onPageChanged(changePagesPart.currentPage);
            break;
          }
        }
      }
    };
    return (
        <div className={s.usersWrapper}>
          <h3>make <span>friends</span></h3>
          <div className={s.usersPageNavigation}>
            <button onClick={onClickIterator}
                    disabled={this.props.startDisplayedPagesCount <= 1 &&
                    'disabled'}>
              PREV
            </button>
            {pagesSlice.map(p =>
                <span onClick={() => onPageChanged(p)}
                      className={p === this.props.currentPage && s.selected}>
                  {p}
                </span>,
            )}
            <button onClick={onClickIterator}
                    disabled={this.props.endDisplayedPagesCount >=
                    pagesCount && 'disabled'}>
              NEXT
            </button>
          </div>
          {this.props.users.map(u =>
              <UserCard key={u.id}
                        user={u}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow} />,
          )}
          <div className={s.usersPageNavigation}>
            <button onClick={onClickIterator}
                    disabled={this.props.startDisplayedPagesCount <= 1 &&
                    'disabled'}>
              PREV
            </button>
            {pagesSlice.map(p =>
                <span onClick={() => onPageChanged(p)}
                      className={p === this.props.currentPage && s.selected}>
                  {p}
                </span>,
            )}
            <button onClick={onClickIterator}
                    disabled={this.props.endDisplayedPagesCount >=
                    pagesCount && 'disabled'}>
              NEXT
            </button>
          </div>
        </div>
    );
  };

  componentDidMount = () => {
    this.props.users.length === 0 && axios({
      method: 'get',
      url: `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
      headers: {
        'API-KEY': '96493218-8bfc-4856-861e-4a6864dbda5c',
      },
    })
        .then(responseValue => {
              this.props.setUsers(responseValue.data.items);
              this.props.setTotalUsersCount(responseValue.data.totalCount);
            },
        );
  };
}

export default Users;