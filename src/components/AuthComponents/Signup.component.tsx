import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonProps } from '../ButtonComponents/Button.component';
import InputField from '../InputFieldComponents/InputField.component';
import { useSignUp } from './AuthHooks';
// import signUpVideo from '../../assets/signup.mp4';
import signUpVideo from '../../assets/signup-compressed.mp4';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import './AuthComponentsStyling/Auth.scss';

interface RegisterProps {
  showNav: Dispatch<SetStateAction<boolean>>;
}

const Signup = ({ showNav }: RegisterProps) => {
  const {
    signUp,
    signUpResponse,
    signUpError,
    signUpStatus,
    inputChange,
    signUpVals,
    signUpErrorMessage,
  } = useSignUp();

  let navigate = useNavigate();
  const signUpBtn: ButtonProps = {
    btnSize: ButtonSizes.LARGE,
    btnStyle: ButtonStyles.SOLID,
    disabled: false,
    action: () => signUp(),
    children: 'Sign Up',
  };

  useEffect(() => {
    showNav(false);
    return () => {
      showNav(true);
    };
  }, []);

  return (
    <div className='Auth'>
      <div className='auth-video-container'>
        <video className='auth-video' src={signUpVideo} loop autoPlay muted />
      </div>
      <div className='signup-field'>
        {/* <button className='back-button' onClick={() => navigate(-1)}>
          Back
        </button> */}
        <div className='signup-content-container'>
          <div className='title'>
            <h1 className='login-title'>Create Your Account!</h1>
            <h4 className='login-subtitle'>
              Get ready to have a good time with <span className='special'>Phoebe</span>
            </h4>
          </div>

          <div className='button-group'>
            <button className='continue-with apple'>
              <span>
                <FaApple className='apple-font' />
              </span>
              <span>Sign up with Apple</span>
            </button>
            <button className='continue-with google'>
              <span>
                <FcGoogle className='google-font' />
              </span>
              <span>Sign up with Google</span>
            </button>
            <button className='continue-with facebook'>
              <span>
                <FaFacebook className='facebook-font' />
              </span>
              <span>Sign up with Facebook</span>
            </button>
          </div>

          <div className='divider'>
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <div className='form-input-container'>
            <InputField
              title={'Email'}
              type={'text'}
              inputChange={inputChange}
              inputName={'email'}
              val={signUpVals.email}
            >
              Email
            </InputField>
            <InputField
              title={'Username'}
              type={'text'}
              inputChange={inputChange}
              inputName={'username'}
              val={signUpVals.username}
            >
              Username
            </InputField>
            <InputField
              title={'First Name'}
              type={'text'}
              inputChange={inputChange}
              inputName={'firstName'}
              val={signUpVals.firstName}
            >
              First Name
            </InputField>
            <InputField
              title={'Last Name'}
              type={'text'}
              inputChange={inputChange}
              inputName={'lastName'}
              val={signUpVals.lastName}
            >
              Last Name
            </InputField>
            <InputField
              title={'Password'}
              type={'password'}
              inputChange={inputChange}
              inputName={'password'}
              val={signUpVals.password}
            >
              Password
            </InputField>
            <InputField
              title={'Confirm Password'}
              type={'password'}
              inputChange={inputChange}
              inputName={'cpassword'}
              val={signUpVals.cpassword}
            >
              Confirm Password
            </InputField>
          </div>
          {signUpError ? (
            <>
              <div className='error'>
                <span>{signUpErrorMessage}</span>
              </div>
              <br />
            </>
          ) : null}
          <br />
          <div className='button-group'>
            <Button {...signUpBtn} />
            {/* <Button {...signInBtn} /> */}
          </div>
          <br />
          {signUpStatus == 'loading' ? <Spinner animation='grow' /> : <span></span>}
        </div>
        <div className='change-auth-method'>
          <p>
            Already have an account? <Link to='/signin'>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
