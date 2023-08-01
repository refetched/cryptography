import { Cipher, CipherKey, createCipheriv } from 'crypto';
import { IV } from '..';

export const createCipher = (key: CipherKey, iv: IV): Cipher => {
  return createCipheriv('aes-256-cbc', key, iv);
};
