module.exports = function check(str, bracketsConfig) {
  var stack =[];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        if (bracketsConfig[j][1] == stack[stack.length-1] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
          stack.pop();
          continue;
        }
        stack.push(bracketsConfig[j][0]);
        continue;
      }
      if (str[i] == bracketsConfig[j][1]) {
        if (stack.pop() != bracketsConfig[j][0]) return false;
      }
    }
  }
  return !stack.length;
}