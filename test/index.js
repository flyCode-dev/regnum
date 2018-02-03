import test from 'tape';
import Regnum from '../src';

test('regnum', (t) => {
  let regnumObject;
  let regnum;
  t.plan(4);

  regnumObject = {number: '[0-9]*'};
  regnum = new Regnum('($number$)', regnumObject);
  t.deepEqual({number: '22'}, regnum.match('22'), 'simple test');

  regnumObject = {number: '[0-9]*'};
  regnum = new Regnum('[a-zA-Z ]*($number$)', regnumObject);
  t.deepEqual({number: '22'}, regnum.match('Bending Unit 22',), 'testing options');

  regnumObject = {number: '[0-9]*', name: '[a-zA-Z]*'};
  regnum = new Regnum('($name$).* ($number$)', regnumObject);
  t.deepEqual({
    name: 'Bender',
    number: '22'
  }, regnum.match('Bender Bending Rodríguez designated in-universe as Bending Unit 22'), '2 object return test');


  regnumObject = {
    username: '[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+',
    domain: '[a-zA-Z0-9-]+',
    zone: '(?:\.[a-zA-Z0-9-]+)*'
  };

  regnum = new Regnum('^($username$)@($domain$)($zone$)$', regnumObject);
  t.deepEqual({
    username: 'bender',
    domain: 'ilovebender',
    zone: '.com'
  }, regnum.match('bender@ilovebender.com'), 'matching with email');


  regnumObject = {
    number: '[0-9]*',
    name: {
      value: '[a-zA-Z]*',
      match: 'first',
    }
  };

  regnum = new Regnum(regnumObject);
  t.deepEqual({
    name: 'Bender',
    number: '22'
  }, regnum.match('Bender Bending Rodríguez designated in-universe as Bending Unit 22'), '2 object return test');
});
