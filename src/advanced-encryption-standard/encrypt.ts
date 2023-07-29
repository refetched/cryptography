import { Cipher } from 'crypto';
import { Encrypted } from '../types';
import { Decrypted } from '../types/Decrypted';

export const encrypt = (decrypted: Decrypted, cipher: Cipher): Encrypted => {
  return cipher.update(decrypted, 'utf8', 'hex') + cipher.final('hex');
};
