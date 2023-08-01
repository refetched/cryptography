import { randomBytes } from 'crypto';
import { IV } from '..';

export const randomIV = (): IV => {
  return randomBytes(16);
};
