import test from 'tape';
import regnum from '../src';

test('regnum', (t) => {
  t.plan(1);
  let regnumObject = {number: '\d+'};
  t.deepEqual({number: 37495081750}, regnum('37495081750', '($number$)', regnumObject), 'simple test')
});
