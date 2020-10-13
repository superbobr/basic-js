const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let dreamteam = [];
  for (let name of members) {
    if (typeof name === 'string') {
      dreamteam.push(name.trim().toLocaleUpperCase()[0]);
    }
  }
  return dreamteam.sort().join('');
};