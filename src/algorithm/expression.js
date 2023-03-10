// src: include chars: [0-9], +, -, *, /
// // 9+(3-1)*3+10/2 => 9 3 1-3*+ 10 2/+
const infix2suffix = (src) => {
  const operatorStack = [];
  const stack = [];
  for (let i = 0; i < src.length; i += 1) {
    const c = src.charAt(i);
    if (c !== ' '&& c >= '0' && c <= '9')stack.push(c); 
    else if (c === ')') {
      let c1 = operatorStack.pop();
      while (c1 !== '(') {
        stack.push(c1);
        c1 = operatorStack.pop();
      }
    } else if (operatorStack.length > 0 && (c === '+' || c === '-') && operatorStack[operatorStack.length - 1] === '*' || operatorStack[operatorStack.length - 1] === '/'){
      stack.push(operatorStack.pop());
    }
    operatorStack.push(c);
  }
  while (operatorStack.length > 0) {
    stack.push(operatorStack.pop());
  }
  return stack;
};

export default {
  infix2suffix,
};
