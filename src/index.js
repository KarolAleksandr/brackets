module.exports = function check(str, bracketsConfig) {
  let stack;
  stack = [];

    if(str.length % 2 === 0) { // if str.length is odd that means some elements are wasted (dont have a pair) 
      stack.push(str[0])
      console.log(stack);
        for(let i = 1; i < str.length; i++) {
           if(stack.length === 0) {
            stack.push(str[i]);
          continue;
          }
          checkChar(str[i]); // every char compare with last stack elem
         
        }
    } else {
      return false;
    }

//start function checkChar
function checkChar(char) {
  console.log(char);
  let lastInStack = stack[stack.length-1];

    for(let i = 0; i < bracketsConfig.length; i++ ) {
      if(char === bracketsConfig[i][1] && lastInStack === bracketsConfig[i][0]) {
        console.log(`${lastInStack} - ${char}`);
        stack.pop();
        break;
        
      } else if(char === bracketsConfig[i][1] && lastInStack === bracketsConfig[i][0] && char === lastInStack){
        stack.pop();
        break;
     } else if(bracketsConfig[i][bracketsConfig[i].indexOf(char)]) {
      stack.push(char);
     }
    }
}// end of function char
console.log(stack);
return stack.length === 0; // if stack is empty - true. because all the elems dasn`t have pair
  }
