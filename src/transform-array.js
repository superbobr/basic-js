const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice();
  for (let item of arr) {
    if (item === '--discard-prev') {
      newArr.slice(newArr.indexOf(item) - 1, 2);
    } else if (item === '--discard-next') {
      newArr.slice(newArr.indexOf(item), 2);
    } else if (item === '--double-next') {
      newArr[newArr.indexOf(item)] = newArr[newArr.indexOf(item) + 1];
    } else if (item === '--double-prev') {
      newArr[newArr.indexOf(item)] = newArr[newArr.indexOf(item) - 1];
    }
  }
  return newArr;
};