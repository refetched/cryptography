import { IV } from '@refetched/cryptography-types';
import { Cipher, CipherKey, Decipher } from 'crypto';
import { createCipher, createDecipher, decryptString, encryptString, randomCipherKey, randomIV } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Cipher;
  let mockDecipher: Decipher;
  let mockString: string;

  beforeEach(() => {
    mockCipherKey = randomCipherKey();
    mockIV = randomIV();
    mockCipher = createCipher(mockCipherKey, mockIV);
    mockDecipher = createDecipher(mockCipherKey, mockIV);
    mockString = 'mockString';
  });

  test('THEN it should encrypt the object', () => {
    const response = encryptString(mockString, mockCipher);

    expect(decryptString(response, mockDecipher)).toEqual(mockString);
  });
});
