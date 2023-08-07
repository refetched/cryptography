import { getStringFromObject } from '@refetched/core';
import { Cipher } from 'crypto';
import { Encrypted, encryptString } from '..';

export const encryptObject = <T extends object>(obj: T, cipher: Cipher): Encrypted => {
  return encryptString(getStringFromObject(obj), cipher);
};
