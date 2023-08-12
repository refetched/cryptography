import { IV } from '@refetched/cryptography-types';
import { Cipher, CipherKey, createCipheriv } from 'crypto';

export const createCipher = (cipherKey: CipherKey, iv: IV): Cipher => {
  return createCipheriv('aes-256-cbc', cipherKey, iv);
};
