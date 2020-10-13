const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let i = 1;
    let depthArray = 1;
    arr.forEach(value => {
      if (typeof value === 'object') {
        i++;
        this.calculateDepth(value);
      }
      if (i > depthArray) {
        depthArray = i;
        i = 1;
      }
    });
    return depthArray;
  }
};