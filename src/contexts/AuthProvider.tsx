import { useEffect, useState } from 'react';
import { Paths } from '../globals/paths';
import { getAuthToken } from '../utils/getAuthToken';
import setAxiosAuthToken from '../utils/setAxiosAuthToken';
import { AuthContext } from './AuthContext';

export const AuthProvider = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [redirectAuthPath, setRedirectAuthPath] = useState<string>();
  const [redirectPath, setRedirectPath] = useState<string>();
  const token = getAuthToken();

  useEffect(() => {
    if (redirectAuthPath === undefined) {
      setRedirectAuthPath(Paths.SIGNIN);
    }
    setAxiosAuthToken(token);
    setIsAuthenticated(token !== null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        redirectAuthPath,
        setRedirectAuthPath,
        redirectPath,
        setRedirectPath,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
