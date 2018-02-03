import _ from 'lodash';

export default class regnum {
  /**
   *
   * @param map
   * @param expression
   * @param options
   */
  constructor(expression, map, options) {
    this.startSymbol = '$';
    this.endSymbol = '$';
    this.expression = expression;
    this.map = map;
    this.options = options;
    this.debug = false;
  }

  getRegExp() {
    this.keys = _.keys(this.map);
    this.keys = _.map(this.keys, key => {
      let keyword = this.startSymbol + key + this.endSymbol;
      return {
        key,
        index: this.expression.indexOf(keyword)
      };
    });

    this.keys = _.omit(this.keys, {index: -1});
    this.keys = _.sortBy(this.keys, 'index');

    _.each(this.keys, o => {
      let
        keyword = this.startSymbol + o.key + this.endSymbol;
      this.expression = this.expression.replace(keyword, this.map[o.key]);
    });
    return new RegExp(this.expression, this.options);
  }

  match(input) {
    let output = {};
    let matchedArray = input.match(this.getRegExp());

    if (this.debug) {
      console.log('Input            ====>', input);
      console.log('Result           ====>', matchedArray);
      console.log('Compiled RegExp  ====>', this.expression);
      console.log('Options          ====>', this.options);
    }

    if (matchedArray && matchedArray.length) {
      matchedArray.splice(0, 1);
      _.each(this.keys, (o, index) => {
        output[o.key] = matchedArray[index];
      });
    }
    return output;
  }
}

