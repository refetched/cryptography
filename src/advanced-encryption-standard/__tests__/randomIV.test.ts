import { randomIV } from '../randomIV';

describe('GIVEN the function', () => {
  test('THEN it should return a random iv', () => {
    const response = randomIV();

    expect(response).toHaveLength(16);
  });
});
