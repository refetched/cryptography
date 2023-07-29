import { CipherKey, Decipher, createDecipheriv } from 'crypto';
import { IV } from '../types/IV';

export const createDecipher = (key: CipherKey, iv: IV): Decipher => {
  return createDecipheriv('aes-256-cbc', key, iv);
};
