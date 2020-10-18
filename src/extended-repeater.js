const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let result = '';
  let conc = '';
  if (!separator) {
    separator = '+';
  }
  if (addition) {
    conc = str + addition + separator;
  } else {
    conc = str + separator;
  }
  
  for (let i = 0; i < repeatTimes; i ++) {
    result += conc;
  }
  result = result.slice(0, result.length - separator.length);
  return result;
};
  