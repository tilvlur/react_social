import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Login from './Login';
import {getCaptchaUrl, isUserAuth} from '../../redux/selectors';

const mapStateToProps = state => ({
  isAuth: isUserAuth(state),
  captchaUrl: getCaptchaUrl(state),
});


export default connect(mapStateToProps, {login})(Login);
/*
//if there is no 'mapStateToProps', then you can use 'null'
export default connect(null, {login})(Login)*/
