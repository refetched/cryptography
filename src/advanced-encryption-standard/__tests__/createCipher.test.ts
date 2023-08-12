import { IV } from '@refetched/cryptography-types';
import { Cipher, CipherKey, createCipheriv, randomBytes } from 'crypto';
import { createCipher } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Cipher;

  beforeEach(() => {
    mockCipherKey = randomBytes(32);
    mockIV = randomBytes(16);
    mockCipher = createCipheriv('aes-256-cbc', mockCipherKey, mockIV);
  });

  test('THEN it should create the cipher', () => {
    const response = createCipher(mockCipherKey, mockIV);

    expect(response).toEqual(mockCipher);
  });
});
