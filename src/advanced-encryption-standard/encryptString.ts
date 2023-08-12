import { Encrypted } from '@refetched/cryptography-types';
import { Cipher } from 'crypto';

export const encryptString = (value: string, cipher: Cipher): Encrypted => {
  return cipher.update(value, 'utf8', 'hex') + cipher.final('hex');
};
