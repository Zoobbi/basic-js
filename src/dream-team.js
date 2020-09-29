const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = [];
  if (!Array.isArray(members)) return false;
  for (let item of members) {
    if (typeof item == 'string') {
      item = item.trim();
      console.log(item);
      if(item !='') {
        name.push(item[0].toUpperCase());
      }
    }
  }
  return name.sort().join('');
};

