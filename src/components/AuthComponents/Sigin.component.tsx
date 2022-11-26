import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Button, { ButtonProps } from '../ButtonComponents/Button.component';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import './AuthComponentsStyling/Auth.scss';
import { useSignIn } from './AuthHooks';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import loginVideo from '../../assets/login-sunset.mp4';
import InputField from '../InputFieldComponents/InputField.component';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';

interface SigninProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const Signin = ({ showNav }: SigninProps) => {
  const {
    signIn,
    signInResponse,
    signInStatus,
    signInVals,
    inputChange,
    signInError,
    signInErrorMessage,
  } = useSignIn();

  const signInBtn: ButtonProps = {
    btnSize: ButtonSizes.LARGE,
    btnStyle: ButtonStyles.SOLID,
    disabled: false,
    action: () => signIn(),
    children: 'Sign In',
  };

  let navigate = useNavigate();
  const continueBtn: ButtonProps = {
    btnSize: ButtonSizes.LARGE,
    btnStyle: ButtonStyles.PRIMARY,
    disabled: false,
    action: () => {
      console.log('Navigating');
      navigate('/');
    },
    children: 'Continue',
  };

  useEffect(() => {
    showNav(false);

    return () => {
      showNav(true);
    };
  }, [signInVals]);

  return (
    <div className='Auth'>
      <div className='signin-field'>
        {/* <button className='back-button' onClick={() => navigate(-1)}>
          Back
        </button> */}
        <div className='login-content-container'>
          <div className='title'>
            <h1 className='login-title'>Welcome Back!</h1>
            <h4 className='login-subtitle'>
              Get ready to have a good time with <span className='special'>Phoebe</span>
            </h4>
          </div>

          <InputField
            title={'Email or Username'}
            type={'text'}
            inputChange={inputChange}
            inputName={'email'}
            val={signInVals.email}
          >
            Enter your Email or Username
          </InputField>
          <br />
          <InputField
            title={'Password'}
            type={'password'}
            inputChange={inputChange}
            inputName={'password'}
            val={signInVals.password}
          >
            Password
          </InputField>
          <br />
          {signInError ? (
            <>
              <div className='error'>
                <span>{signInErrorMessage}</span>
              </div>
              <br />
            </>
          ) : null}
          <br />
          <div className='button-group'>
            <Button {...signInBtn} />
            {/* <Button {...signInBtn} /> */}
            <button className='continue-with apple'>
              <span>
                <FaApple className='apple-font' />
              </span>
              <span>Sign in with Apple</span>
            </button>
            <button className='continue-with google'>
              <span>
                <FcGoogle className='google-font' />
              </span>
              <span>Sign in with Google</span>
            </button>
            <button className='continue-with facebook'>
              <span>
                <FaFacebook className='facebook-font' />
              </span>
              <span>Sign in with Facebook</span>
            </button>
          </div>
          <br />
          {signInStatus == 'loading' ? <Spinner animation='grow' /> : <span></span>}
        </div>
        <div className='change-auth-method'>
          <p>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </div>

      <div className='auth-video-container'>
        <video className='auth-video' src={loginVideo} loop autoPlay muted />
      </div>
    </div>
  );
};

export default Signin;
