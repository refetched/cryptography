import { randomCipherKey } from '../randomCipherKey';

describe('GIVEN the function', () => {
  test('THEN it should return a random cipher key', () => {
    const response = randomCipherKey();

    expect(response).toHaveLength(32);
  });
});
