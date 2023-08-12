import { IV } from '@refetched/cryptography-types';
import { CipherKey, Decipher } from 'crypto';
import { createCipher, createDecipher, decryptObject, encryptObject, randomCipherKey, randomIV } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Decipher;
  let mockDecipher: Decipher;
  let mockObject: object;

  beforeEach(() => {
    mockCipherKey = randomCipherKey();
    mockIV = randomIV();
    mockCipher = createCipher(mockCipherKey, mockIV);
    mockDecipher = createDecipher(mockCipherKey, mockIV);
    mockObject = { mockKey: 'mockValue' };
  });

  test('THEN it should decrypt the object', () => {
    const response = decryptObject(encryptObject(mockObject, mockCipher), mockDecipher);

    expect(response).toEqual(mockObject);
  });
});
