const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = (2 ** disksNumber) - 1;
  let minTime = Math.floor((3600 / turnsSpeed) * minTurns);
  return {
    turns: minTurns,
    seconds: minTime
  };
};