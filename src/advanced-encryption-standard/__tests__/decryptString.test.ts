import { IV } from '@refetched/cryptography-types';
import { CipherKey, Decipher } from 'crypto';
import { createCipher, createDecipher, decryptString, encryptString, randomCipherKey, randomIV } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Decipher;
  let mockDecipher: Decipher;
  let mockString: string;

  beforeEach(() => {
    mockCipherKey = randomCipherKey();
    mockIV = randomIV();
    mockCipher = createCipher(mockCipherKey, mockIV);
    mockDecipher = createDecipher(mockCipherKey, mockIV);
    mockString = 'mockString';
  });

  test('THEN it should decrypt the string', () => {
    const response = decryptString(encryptString(mockString, mockCipher), mockDecipher);

    expect(response).toEqual(mockString);
  });
});
