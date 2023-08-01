import { encodeBuffer } from '@refetched/core';
import { Cipher } from 'crypto';
import { Encrypted, encryptString } from '..';

export const encryptBuffer = (decrypted: Buffer, cipher: Cipher): Encrypted => {
  return encryptString(encodeBuffer(decrypted), cipher);
};
