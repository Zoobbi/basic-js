const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  throw new CustomError('Not implemented');
  if(!date) return 'Unable to determine the time of year!'
  try{ date.getMonth();}
  catch (e) {
    console.log(e);
    throw new Error(e);
  }
  if(Object.prototype.toString.call(date) != '[object Date]') throw new Error("Error on a very tricky moment");
  let month = date.getMonth()+1;
  if(month < 3 || month == 12) return 'winter';
  if(month < 6) return 'spring';
  if(month < 9) return 'summer';
  if(month < 12) return 'autumn';
  }









