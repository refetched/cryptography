import { IV } from '@refetched/cryptography-types';
import { Cipher, CipherKey, Decipher } from 'crypto';
import { createCipher, createDecipher, decryptBuffer, encryptBuffer, randomCipherKey, randomIV } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Cipher;
  let mockDecipher: Decipher;
  let mockBuffer: Buffer;

  beforeEach(() => {
    mockCipherKey = randomCipherKey();
    mockIV = randomIV();
    mockCipher = createCipher(mockCipherKey, mockIV);
    mockDecipher = createDecipher(mockCipherKey, mockIV);
    mockBuffer = Buffer.from('mockBuffer');
  });

  test('THEN it should encrypt the buffer', () => {
    const response = encryptBuffer(mockBuffer, mockCipher);

    expect(decryptBuffer(response, mockDecipher)).toEqual(mockBuffer);
  });
});
