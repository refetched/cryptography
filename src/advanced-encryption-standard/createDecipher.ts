import { IV } from '@refetched/cryptography-types';
import { CipherKey, Decipher, createDecipheriv } from 'crypto';

export const createDecipher = (cipherKey: CipherKey, iv: IV): Decipher => {
  return createDecipheriv('aes-256-cbc', cipherKey, iv);
};
