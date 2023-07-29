import { Decipher } from 'crypto';
import { Encrypted } from '../types';
import { Decrypted } from '../types/Decrypted';

export const decrypt = (encrypted: Encrypted, decipher: Decipher): Decrypted => {
  return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
};
