import { getStringFromObject } from '@refetched/core';
import { Encrypted } from '@refetched/cryptography-types';
import { Cipher } from 'crypto';
import { encryptString } from '.';

export const encryptObject = <T extends object>(value: T, cipher: Cipher): Encrypted => {
  return encryptString(getStringFromObject(value), cipher);
};
