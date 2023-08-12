import { getObjectFromString } from '@refetched/core';
import { Encrypted } from '@refetched/cryptography-types';
import { Decipher } from 'crypto';
import { decryptString } from '.';

export const decryptObject = <T extends object>(value: Encrypted, decipher: Decipher): T => {
  return getObjectFromString(decryptString(value, decipher));
};
