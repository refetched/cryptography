import { IV } from '@refetched/cryptography-types';
import { randomBytes } from 'crypto';

export const randomIV = (): IV => {
  return randomBytes(16);
};
