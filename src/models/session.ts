import { Paths } from '../globals/paths';
import { getAuthToken } from '../utils/getAuthToken';

export type Session = {
  isAuthenticated?: boolean;
  redirectPath: string;
};

export const initialSession: Session = {
  isAuthenticated: false,
  redirectPath: '',
};
