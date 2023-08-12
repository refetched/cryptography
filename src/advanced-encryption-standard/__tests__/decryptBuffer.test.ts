import { IV } from '@refetched/cryptography-types';
import { CipherKey, Decipher } from 'crypto';
import { createCipher, createDecipher, decryptBuffer, encryptBuffer, randomCipherKey, randomIV } from '..';

describe('GIVEN the function', () => {
  let mockCipherKey: CipherKey;
  let mockIV: IV;
  let mockCipher: Decipher;
  let mockDecipher: Decipher;
  let mockBuffer: Buffer;

  beforeEach(() => {
    mockCipherKey = randomCipherKey();
    mockIV = randomIV();
    mockCipher = createCipher(mockCipherKey, mockIV);
    mockDecipher = createDecipher(mockCipherKey, mockIV);
    mockBuffer = Buffer.from('mockBuffer');
  });

  test('THEN it should decrypt the buffer', () => {
    const response = decryptBuffer(encryptBuffer(mockBuffer, mockCipher), mockDecipher);

    expect(response).toEqual(mockBuffer);
  });
});
