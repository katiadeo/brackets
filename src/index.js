module.exports = function check(str, bracketsConfig) {
  
  let config = bracketsConfig.join('').replace(/,/g, '');
  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
    let element = str[i];
    let index = config.indexOf(element)
    // if index is even => open bracket
    if (index % 2 === 0) {
              
      if (element === config[index + 1] && stack[stack.length - 1] === index) {
          stack.pop();
      } else if (stack[stack.length - 1] !== index) {
          stack.push(index)
      } else {
          // push OPEN BRACKET onto stack
          stack.push(index);
      }

    }
    // if index is not even => close bracket
    else {
    // if (open bracket doesn't equal to "close bracket - 1" (= open bracket) )
      if (stack.pop() !== index - 1){
        return false;
      }
    }
          
  }

  if (stack.length !== 0) {
      return false;
  }
  return true;
}
