import { decodeBuffer } from '@refetched/core';
import { Decipher } from 'crypto';
import { decryptString } from '.';
import { Encrypted } from '..';

export const decryptBuffer = (encrypted: Encrypted, decipher: Decipher): Buffer => {
  return decodeBuffer(decryptString(encrypted, decipher));
};
