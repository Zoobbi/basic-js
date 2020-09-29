

module.exports = function transform(arr) {
  if(arr.length == 0) return [];
  if(!(Array.isArray(arr))) throw new Error(`${arr} is not array`);
  let array = [];
  let command = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  for (let i = 0 ; i < arr.length; i++) {
   if(arr[i] != command[0] && arr[i] != command[1] && arr[i] != command[2] && arr[i] != command[3]) {
      array.push(arr[i]);
    }
    if(arr[i-1] === command[0]) {
      array.pop();
      continue;
    }
    if (arr[i - 1] === "--double-next") array.push(arr[i]);
    if(arr[i+1] === command[1]) {
      array.pop();
      continue;
    }
    if (arr[i + 1] === "--double-prev") array.push(arr[i]);
  }
  return array;
  };