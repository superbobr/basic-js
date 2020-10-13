const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = [];
  for (let value of matrix) {
    if (value === '^^') {
      cats.push(value);
    } else if (typeof value === 'object') {
      for (let val of value) {
        if (val === '^^') {
          cats.push(value);
    }
  } 
}
  }
  return cats.length;
};
