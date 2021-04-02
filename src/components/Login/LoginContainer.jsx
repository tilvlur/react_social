import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import Login from './Login';

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps,{login})(Login)