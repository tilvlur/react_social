import {connect} from 'react-redux';
import Navbar from './Navbar';
import {getNavbar} from '../../redux/selectors';

const mapStateToProps = state => ({
  navbar: getNavbar(state),
});

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;