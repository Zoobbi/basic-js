const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      let cur_count = 1;
      if( Array.isArray(arr[i])) {
        cur_count += this.calculateDepth(arr[i]);
        if(count < cur_count) {
          count = cur_count
        }
      }
    }
    return count;
  }
};