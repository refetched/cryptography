import { getObjectFromString } from '@refetched/core';
import { Decipher } from 'crypto';
import { Encrypted, decryptString } from '..';

export const decryptObject = <T extends object>(encrypted: Encrypted, decipher: Decipher): T => {
  return getObjectFromString(decryptString(encrypted, decipher));
};
