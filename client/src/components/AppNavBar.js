import React, { useState, Fragment } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { logout } from '../js/actions/authActions';
import LoginModal from './Auth/LoginModal';
import RegisterModal from './Auth/RegisterModal';

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => setIsOpen(!isOpen);
  const isAuth=useSelector((state)=>state.authReducer.isAuth);
  
  const dispatch=useDispatch()
  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/AddBlog">
          <span className="navbar-text mr-3">
            <strong>Add a Blog</strong>
          </span>
        </Link>
      </NavItem>
      <NavLink href='/' onClick={logoutUser}>
       Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
          {isAuth?authLinks:guestLinks}
           </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;