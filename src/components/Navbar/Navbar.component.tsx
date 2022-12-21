import React, { Fragment } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import './NavbarStyling/NavbarStyling.scss';
import Button from '../ButtonComponents/Button.component';
import { ButtonProps } from '../ButtonComponents/Button.component';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import { getAuthToken } from '../../utils/getAuthToken';
import { Paths } from '../../globals/paths';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = getAuthToken();

  const signOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  const signInBtn: ButtonProps = {
    btnSize: ButtonSizes.SMALL,
    btnStyle: ButtonStyles.PRIMARY,
    disabled: false,
    action: () => signOut(),
    children: 'Sign Out',
  };

  return (
    <Fragment>
      <div className='navbar'>
        {/* <Navbar bg='dark' variant='dark'>
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
              ) : null}
              {isAuthenticated ? <Button {...signInBtn} /> : null}
            </Nav>
          </Container>
        </Navbar> */}
      </div>
    </Fragment>
  );
};

export default Navigation;
