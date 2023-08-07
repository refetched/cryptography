import { Cipher } from 'crypto';
import { Encrypted } from '..';

export const encryptString = (str: string, cipher: Cipher): Encrypted => {
  return cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
};
