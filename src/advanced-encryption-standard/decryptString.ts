import { Decipher } from 'crypto';
import { Encrypted } from '..';

export const decryptString = (encrypted: Encrypted, decipher: Decipher): string => {
  return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
};
