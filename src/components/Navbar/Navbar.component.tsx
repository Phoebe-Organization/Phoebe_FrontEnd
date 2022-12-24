import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarStyling/NavbarStyling.scss';
import Button from '../ButtonComponents/Button.component';
import { ButtonProps } from '../ButtonComponents/Button.component';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Paths } from '../../globals/paths';

const Navigation = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const signOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  useEffect(() => {
    setShowNavbar(location.pathname !== Paths.SIGNIN && location.pathname !== Paths.SIGNUP);
  }, [location]);

  const signInBtn: ButtonProps = {
    btnSize: ButtonSizes.SMALL,
    btnStyle: ButtonStyles.PRIMARY,
    disabled: false,
    action: () => signOut(),
    children: 'Sign Out',
  };

  return showNavbar ? (
    <Fragment>
      <div className='navbar'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand>Phoebe</Navbar.Brand>
            <Nav className='me-auto'>
              <Link to='/' className='navLink'>
                Home
              </Link>

              <Link to='/about' className='navLink'>
                About
              </Link>

              {!isAuthenticated ? (
                <Link to='/signin' className='navLink'>
                  Sign In
                </Link>
              ) : (
                <Link to='/signin' className='navLink'>
                  Sign Out
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Fragment>
  ) : null;
};

export default Navigation;
