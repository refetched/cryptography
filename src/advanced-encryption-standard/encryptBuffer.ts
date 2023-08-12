import { encodeBuffer } from '@refetched/core';
import { Encrypted } from '@refetched/cryptography-types';
import { Cipher } from 'crypto';
import { encryptString } from '.';

export const encryptBuffer = (value: Buffer, cipher: Cipher): Encrypted => {
  return encryptString(encodeBuffer(value), cipher);
};
