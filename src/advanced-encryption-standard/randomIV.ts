import { randomBytes } from 'crypto';
import { IV } from '../types/IV';

export const randomIV = (): IV => {
  return randomBytes(16);
};
