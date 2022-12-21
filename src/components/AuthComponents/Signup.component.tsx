import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import Button, { ButtonProps } from '../ButtonComponents/Button.component';
import InputField from '../InputFieldComponents/InputField.component';
import { useSignUp } from './AuthHooks';
import signUpVideo from '../../assets/signup-compressed.mp4';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import {
  AuthContainer,
  AuthVideoContainer,
  ButtonGroup,
  ChangeAuthMethod,
  ContinueWithButton,
  Divider,
  ErrorMessage,
  FormInputContainer,
  SignupContentContainer,
  SignupField,
  SubTitle,
  Title,
  TitleContainer,
  Video,
} from '../styles/auth';

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
  const [acceptTerms, setAcceptTerms] = useState(false);

  let navigate = useNavigate();
  const signUpBtn: ButtonProps = {
    btnSize: ButtonSizes.LARGE,
    btnStyle: ButtonStyles.SOLID,
    disabled: !acceptTerms,
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
    <AuthContainer>
      <AuthVideoContainer>
        <Video src={signUpVideo} loop autoPlay muted />
      </AuthVideoContainer>
      <SignupField>
        <SignupContentContainer>
          <TitleContainer>
            <Title>Create Your Account!</Title>
            <SubTitle>
              Get ready to have a good time with <span>Phoebe</span>
            </SubTitle>
          </TitleContainer>

          <ButtonGroup>
            <ContinueWithButton fontSize='24px'>
              <span>
                <FaApple />
              </span>
              <span>Sign up with Apple</span>
            </ContinueWithButton>
            <ContinueWithButton fontSize='24px'>
              <span>
                <FcGoogle />
              </span>
              <span>Sign up with Google</span>
            </ContinueWithButton>
            <ContinueWithButton fontSize='24px' color='#4267b2'>
              <span>
                <FaFacebook />
              </span>
              <span>Sign up with Facebook</span>
            </ContinueWithButton>
          </ButtonGroup>

          <Divider>
            <span></span>
            <p>OR</p>
            <span></span>
          </Divider>

          <FormInputContainer>
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
            <div>
              <label htmlFor='terms'>
                <input
                  type={'checkbox'}
                  name='terms'
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms((terms) => !terms)}
                />
                Accept Terms and Conditions
              </label>
            </div>
          </FormInputContainer>
          {signUpError ? (
            <>
              <ErrorMessage>
                <span>{signUpErrorMessage}</span>
              </ErrorMessage>
              <br />
            </>
          ) : null}
          <br />
          <ButtonGroup>
            <Button {...signUpBtn} />
          </ButtonGroup>
          <br />
          {signUpStatus == 'loading' ? <Spinner animation='grow' /> : <span></span>}
        </SignupContentContainer>
        <ChangeAuthMethod>
          <p>
            Already have an account? <Link to='/signin'>Sign In</Link>
          </p>
        </ChangeAuthMethod>
      </SignupField>
    </AuthContainer>
  );
};

export default Signup;
