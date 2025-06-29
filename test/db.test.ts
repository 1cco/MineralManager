import { useSpecimens } from '../src/db/useSpecimens';
import { useLocalities } from '../src/db/useLocalities';

test('hooks return empty arrays', () => {
  expect(useSpecimens()).toEqual([]);
  expect(useLocalities()).toEqual([]);
});
