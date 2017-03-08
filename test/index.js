import test from 'tape';
import regnum from '../src';

test('regnum', (t) => {
  t.plan(1);
  let regnumObject = {number: '.*'};
  t.equal({number: 37495081750}, regnum('37495081750', '$number$', regnumObject), 'simple test')
});
