
const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = `${str}`;
  let result = ``;
  let optionalText = '';
  let curAddition = (options.addition || options.addition === false || options.addition === null) ? `${options.addition}` : '|';
  let separat = options.separator ? `${options.separator}` : '+';
  let additionSeparat = options.additionSeparator ? `${options.additionSeparator}` : '';
  options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;

  if (options.additionRepeatTimes != 1) {
    for(let i = 0; i < options.additionRepeatTimes; i++) {
      optionalText += curAddition + additionSeparat;
    }
    optionalText = optionalText.slice(0,(optionalText.length - additionSeparat.length));
  } else if (curAddition !== '|') {
    optionalText = curAddition;
  }

  for(let i = 0; i < options.repeatTimes; i++) {
    result += str + optionalText + separat;
  }
  result = result.slice(0,(result.length - separat.length));

  return result;
  };







