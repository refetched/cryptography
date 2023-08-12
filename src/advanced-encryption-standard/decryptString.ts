import { Encrypted } from '@refetched/cryptography-types';
import { Decipher } from 'crypto';

export const decryptString = (value: Encrypted, decipher: Decipher): string => {
  return decipher.update(value, 'hex', 'utf8') + decipher.final('utf8');
};
