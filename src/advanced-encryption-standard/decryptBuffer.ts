import { decodeBuffer } from '@refetched/core';
import { Encrypted } from '@refetched/cryptography-types';
import { Decipher } from 'crypto';
import { decryptString } from '.';

export const decryptBuffer = (value: Encrypted, decipher: Decipher): Buffer => {
  return decodeBuffer(decryptString(value, decipher));
};
