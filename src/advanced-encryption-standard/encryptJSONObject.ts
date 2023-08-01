import { JSONObject, getStringFromJSONObject } from '@refetched/core';
import { Cipher } from 'crypto';
import { Encrypted, encryptString } from '..';

export const encryptJSONObject = (decrypted: JSONObject, cipher: Cipher): Encrypted => {
  return encryptString(getStringFromJSONObject(decrypted), cipher);
};
