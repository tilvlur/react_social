import {connect} from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => ({navbar: state.navbar.navbar});

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;