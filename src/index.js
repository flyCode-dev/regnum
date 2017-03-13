import _ from 'lodash';

const startSymbol = '$';
const endSymbol = '$';

/**
 * @param {Type}
 * @return {Type}
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

  matchedArray = matchedArray.length && matchedArray.splice(0, 1);

  _.each(keys, (o, index) => {
    output[o.key] = matchedArray[index];
  });

  return output;
}
