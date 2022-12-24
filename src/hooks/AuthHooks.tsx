import React, { useContext, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import setAxiosAuthToken from '../utils/setAxiosAuthToken';
import axios from 'axios';
import { saveAuthToken } from '../utils/saveAuthToken';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

interface UserCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  tokens: Tokens;
}

interface Tokens {
  access: Token;
  refresh: Token;
}

interface Token {
  token: string;
  expires: string;
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  id: string;
  isEmailVerified: boolean;
  role: TypeOfRoles;
  userIntersts: [string];
  sex: TypeOfSexes;
}

enum TypeOfRoles {
  CLIENT = 'client',
  ADMIN = 'admin',
}

enum TypeOfSexes {
  MALE = 'male',
  FEMALE = 'female',
}

interface ErrorResponse {
  code: number;
  message: string;
}

enum ErrorCodes {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

const useSignIn = () => {
  const signInInitialValues: UserCredentials = {
    email: 'Test',
    password: 'Paperplanes1',
  };

  const [signInValues, setSignInValues] = useState(signInInitialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSignInInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignInValues({
      ...signInValues,
      [name]: value,
    });
  };

  const errorHandler = (e: ErrorResponse) => {
    setErrorMessage(e.message);
  };

  const accountSignInEndpoint: string = 'http://localhost:3000/v1/auth/login';
  const navigate = useNavigate();

  const { mutate, data, status, isError } = useMutation({
    mutationFn: (userCreds: UserCredentials) => {
      return axios.post<LoginResponse>(accountSignInEndpoint, userCreds);
    },
    onError: (error: any, variables, context) => {
      errorHandler(error.response.data);
      setIsAuthenticated(false);
    },
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
      saveAuthToken(data.data.tokens.access.token);
      setIsAuthenticated(true);
      navigate('/home');
    },
  });

  const signInUser = () => {
    mutate(signInValues);
  };

  return {
    signIn: signInUser,
    signInResponse: data?.data,
    signInStatus: status,
    inputChange: handleSignInInputChange,
    signInVals: signInValues,
    signInError: isError,
    signInErrorMessage: errorMessage,
  };
};

/****************** Sign Up Hook *******************/
/************************** ***************************/

const useSignUp = () => {
  const signUpInitialValues = {
    firstName: 'Test',
    lastName: 'Me',
    email: 'test@test.com',
    userName: 'Test',
    password: 'Paperplanes1',
    cpassword: 'Paperplanes1',
  };

  const [signUpValues, setSignUpValues] = useState(signUpInitialValues);
  const accountSignUpEndpoint: string = 'http://localhost:3000/v1/auth/register';
  const navigate = useNavigate();
  const handleSignUpInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setSignUpValues({
      ...signUpValues,
      [name]: value,
    });
  };

  const [errorMessage, setErrorMessage] = useState('');
  const errorHandler = (e: ErrorResponse) => {
    setErrorMessage(e.message);
  };
  const { mutate, data, status, isError } = useMutation({
    mutationFn: (userCreds: any) => {
      return axios.post<LoginResponse>(accountSignUpEndpoint, userCreds);
    },
    onError: (error: any, variables, context) => {
      errorHandler(error.response.data);
    },
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
      saveAuthToken(data.data.tokens.access.token);
      navigate('/onboarding');
    },
  });

  const signUpUser = () => {
    if (signUpValues.cpassword !== signUpValues.password) {
      setErrorMessage('Passwords do not match');
      return;
    }
    const { firstName, userName, email, password, lastName } = signUpValues;
    mutate({ firstName, userName, email, password, lastName });
  };
  return {
    signUp: signUpUser,
    signUpResponse: data?.data,
    signUpStatus: status,
    inputChange: handleSignUpInputChange,
    signUpVals: signUpValues,
    signUpError: isError,
    signUpErrorMessage: errorMessage,
  };
};

const useSignOut = () => {};

export { useSignIn, useSignUp };
