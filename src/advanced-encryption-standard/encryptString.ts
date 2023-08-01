import { Cipher } from 'crypto';
import { Encrypted } from '..';

export const encryptString = (decrypted: string, cipher: Cipher): Encrypted => {
  return cipher.update(decrypted, 'utf8', 'hex') + cipher.final('hex');
};
