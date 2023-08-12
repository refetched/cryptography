import { IV } from '@refetched/cryptography-types';
import { Cipher, CipherKey, createDecipheriv, randomBytes } from 'crypto';
import { createDecipher } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockDecipher: Cipher;

  beforeEach(() => {
    mockCipherKey = randomBytes(32);
    mockIV = randomBytes(16);
    mockDecipher = createDecipheriv('aes-256-cbc', mockCipherKey, mockIV);
  });

  test('THEN it should create the cipher', () => {
    const response = createDecipher(mockCipherKey, mockIV);

    expect(response).toEqual(mockDecipher);
  });
});
