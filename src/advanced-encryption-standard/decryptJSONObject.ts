import { JSONObject, getJSONObjectFromString } from '@refetched/core';
import { Decipher } from 'crypto';
import { Encrypted, decryptString } from '..';

export const decryptJSONObject = (encrypted: Encrypted, decipher: Decipher): JSONObject => {
  return getJSONObjectFromString(decryptString(encrypted, decipher));
};
