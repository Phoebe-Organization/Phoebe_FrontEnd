import { createContext, useContext } from 'react';
export type AuthContent = {
  isAuthenticated: boolean | undefined;
  redirectAuthPath: string | undefined;
  redirectPath: string | undefined;
  setIsAuthenticated: (auth: boolean) => void;
  setRedirectAuthPath: (path: string) => void;
  setRedirectPath: (path: string) => void;
};
export const AuthContext = createContext<AuthContent>({
  isAuthenticated: undefined,
  redirectAuthPath: undefined,
  redirectPath: undefined,
  setIsAuthenticated: () => {},
  setRedirectAuthPath: () => {},
  setRedirectPath: () => {},
});
