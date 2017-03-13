import _ from 'lodash';
let debug = false;

const startSymbol = '$';
const endSymbol = '$';

/**
 *
 * @param input
 * @param RegnumExpresson
 * @param map
 * @param options
 * @returns {{}}
 */
export default function (input, RegnumExpresson, map, options) {
  let output = {};

  let keys = Object.keys(map);
  keys = keys.map(key => {
    let keyword = startSymbol + key + endSymbol;
    return {
      key,
      index: RegnumExpresson.indexOf(keyword)
    };
  });

  keys = _.omit(keys, {index: -1});
  keys = _.sortBy(keys, 'index');

  _.each(keys, o => {
    let keyword = startSymbol + o.key + endSymbol;
    RegnumExpresson = RegnumExpresson.replace(keyword, map[o.key]);
  });

  let matchedArray = input.match(new RegExp(RegnumExpresson, options));

  if (debug) {
    console.log('Input            ====>', input);
    console.log('Result           ====>', matchedArray);
    console.log('Compiled RegExp  ====>', RegnumExpresson);
    console.log('Options          ====>', options);
  }

  if (matchedArray && matchedArray.length) {
    matchedArray.splice(0, 1);
    _.each(keys, (o, index) => {
      output[o.key] = matchedArray[index];
    });
  }


  return output;
}
