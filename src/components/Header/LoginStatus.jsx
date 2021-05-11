import React from 'react';
import s from './LoginStatus.module.scss';
import {NavLink} from 'react-router-dom';
import login from '../../assets/images/login.svg';
import {Button} from '../common/FormsControls/FormsControls';

class LoginStatus extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.activateLogoutMenu = this.activateLogoutMenu.bind(this);
    this.deactivateLogoutMenu = this.deactivateLogoutMenu.bind(this);

    this.logout = this.props.logout.bind(this);
    this.logoutWithHideMenu = this.logoutWithHideMenu.bind(this);

    this.elementRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  state = {
    showLogoutMenu: false,
  };

  activateLogoutMenu() {
    this.setState({
      showLogoutMenu: true,
    });
  }

  deactivateLogoutMenu() {
    this.setState({
      showLogoutMenu: false,
    });
  }

  handleClickOutside(e) {
    let elementWithRef = this.elementRef.current;

    /*!!e.target there is always, because there is a document.addEventListener*/
    if (elementWithRef && !elementWithRef.contains(e.target)) {
      this.deactivateLogoutMenu();
    }
  }

  logoutWithHideMenu() {
    this.logout();
    this.deactivateLogoutMenu();
  }

  render() {
    return (
        <div className={s.login}>
          {!this.props.isAuth
              ? <div className={s.loginEnter}>
                <NavLink to='/login'>
                  <img src={login} alt='Login' title='Login' />
                </NavLink>
              </div>

              : <div className={s.loginAuthorized}>
                <div className={s.nickName}>
                  {this.props.login}
                </div>
                <div className={s.avatar}
                     onClick={this.activateLogoutMenu.bind(this)}>
                  <img src={!this.props.userAvatar
                      ? `https://robohash.org/${this.props.login}.png`
                      : `this.props.userAvatar`} alt='Avatar' />
                </div>
                <div className={s.popUpMenu}
                     hidden={!this.state.showLogoutMenu}
                     ref={this.elementRef}>

                  <div className={s.popUpMenuTop}>
                    <div className={s.avatar}>
                      <img src={!this.props.userAvatar
                          ? `https://robohash.org/${this.props.login}.png`
                          : `this.props.userAvatar`} alt='Avatar' />
                    </div>
                    <div className={s.profileInfo}>
                      <div className={s.nickName}>
                        {this.props.login}
                      </div>
                      <div className={s.email}>
                        {this.props.email}
                      </div>
                    </div>
                  </div>
                  <div className={s.popUpMenuBottom}>
                    <Button onClick={this.logoutWithHideMenu}>Logout</Button>
                  </div>
                </div>
              </div>
          }
        </div>
    );
  }
}

export default LoginStatus;