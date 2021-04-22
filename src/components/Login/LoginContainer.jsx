import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Login from './Login';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {login})(Login);
/*
//if there is no 'mapStateToProps', then you can use 'null'
export default connect(null, {login})(Login)*/
