import { IV } from '@refetched/cryptography-types';
import { Cipher, CipherKey, Decipher } from 'crypto';
import { createCipher, createDecipher, decryptObject, encryptObject, randomCipherKey, randomIV } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Cipher;
  let mockDecipher: Decipher;
  let mockObject: object;

  beforeEach(() => {
    mockCipherKey = randomCipherKey();
    mockIV = randomIV();
    mockCipher = createCipher(mockCipherKey, mockIV);
    mockDecipher = createDecipher(mockCipherKey, mockIV);
    mockObject = { mockKey: 'mockValue' };
  });

  test('THEN it should encrypt the object', () => {
    const response = encryptObject(mockObject, mockCipher);

    expect(decryptObject(response, mockDecipher)).toEqual(mockObject);
  });
});
