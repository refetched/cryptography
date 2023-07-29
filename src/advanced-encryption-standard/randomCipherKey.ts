import { CipherKey, randomBytes } from 'crypto';

export const randomCipherKey = (): CipherKey => {
  return randomBytes(32);
};
