import test from 'tape';
import regnum from '../src';

test('regnum', (t) => {
  'asdasdas'.regnumMatch()
  // let regnumObject = {};
  // t.plan(4);
  //
  // regnumObject = {number: '[0-9]*'};
  // t.deepEqual({number: '22'}, regnum('22', '($number$)', regnumObject), 'simple test');
  //
  // regnumObject = {number: '[0-9]*'};
  // t.deepEqual({number: '22'}, regnum('Bending Unit 22', '[a-zA-Z ]*($number$)', regnumObject), 'testing options');
  //
  // regnumObject = {number: '[0-9]*', name: '[a-zA-Z]*'};
  // t.deepEqual({
  //   name: 'Bender',
  //   number: '22'
  // }, regnum('Bender Bending Rodríguez designated in-universe as Bending Unit 22', '($name$).* ($number$)', regnumObject), '2 object return test');
  //
  //
  // regnumObject = {
  //   username: '[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+',
  //   domain: '[a-zA-Z0-9-]+',
  //   zone: '(?:\.[a-zA-Z0-9-]+)*'
  // };
  // t.deepEqual({
  //   username: 'bender',
  //   domain: 'ilovebender',
  //   zone: '.com'
  // }, regnum('bender@ilovebender.com', '^($username$)@($domain$)($zone$)$', regnumObject), 'matching with email');

});
