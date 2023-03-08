import { createContext } from 'react';
export type AuthContext = {
  isAuthenticated: boolean | undefined;
  redirectAuthPath: string | undefined;
  redirectPath: string | undefined;
  setIsAuthenticated: (auth: boolean) => void;
  setRedirectAuthPath: (path: string) => void;
  setRedirectPath: (path: string) => void;
};
export const AuthContext = createContext<AuthContext>({
  isAuthenticated: undefined,
  redirectAuthPath: undefined,
  redirectPath: undefined,
  setIsAuthenticated: () => {},
  setRedirectAuthPath: () => {},
  setRedirectPath: () => {},
});
