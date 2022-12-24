import Button, { ButtonProps } from '../ButtonComponents/Button.component';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import { useSignIn } from '../../hooks/AuthHooks';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import loginVideo from '../../assets/login-sunset.mp4';
import InputField from '../InputFieldComponents/InputField.component';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineUser, AiOutlineUnlock } from 'react-icons/ai';
import { FaFacebook, FaApple } from 'react-icons/fa';
import {
  AuthContainer,
  AuthVideoContainer,
  ButtonGroup,
  ChangeAuthMethod,
  ContinueWithButton,
  ErrorMessage,
  SigninContentContainer,
  SigninField,
  SubTitle,
  Title,
  TitleContainer,
  Video,
} from '../styles/auth';
import { Paths } from '../../globals/paths';

const Signin = () => {
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

  return (
    <AuthContainer>
      <SigninField>
        <SigninContentContainer>
          <TitleContainer>
            <Title>Welcome Back!</Title>
            <SubTitle>
              Get ready to have a good time with <span>Phoebe</span>
            </SubTitle>
          </TitleContainer>

          <InputField
            title={'Email or Username'}
            type={'text'}
            inputChange={inputChange}
            inputName={'email'}
            val={signInVals.email}
            icon={<AiOutlineUser />}
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
            icon={<AiOutlineUnlock />}
          >
            Password
          </InputField>
          <br />
          {signInError ? (
            <>
              <ErrorMessage>
                <span>{signInErrorMessage}</span>
              </ErrorMessage>
              <br />
            </>
          ) : null}
          <br />
          {signInStatus == 'loading' ? <Spinner animation='grow' /> : <span></span>}
          <br />
          <ButtonGroup>
            <Button {...signInBtn} />
            <ContinueWithButton fontSize='24px'>
              <span>
                <FaApple />
              </span>
              <span>Sign in with Apple</span>
            </ContinueWithButton>
            <ContinueWithButton fontSize='24px'>
              <span>
                <FcGoogle />
              </span>
              <span>Sign in with Google</span>
            </ContinueWithButton>

            <ContinueWithButton fontSize='24px' color='#4267b2'>
              <span>
                <FaFacebook />
              </span>
              <span>Sign in with Facebook</span>
            </ContinueWithButton>
          </ButtonGroup>
        </SigninContentContainer>

        <ChangeAuthMethod>
          <p>
            Don't have an account? <Link to={Paths.SIGNUP}>Sign Up</Link>
          </p>
        </ChangeAuthMethod>
      </SigninField>

      <AuthVideoContainer>
        <Video src={loginVideo} loop autoPlay muted />
      </AuthVideoContainer>
    </AuthContainer>
  );
};

export default Signin;
