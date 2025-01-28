// Parenthesis matching
// 		a. {{{}{}}{}} - true
// 		b. {{}{}}-true
// 		c. }{}{-false
// 		d. {{{}{}}-false

const validParenthesis = (str) => {
  let temp = [];

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "{":
        temp.push("{");
        break;
      case "}":
        if (temp.pop() !== "{") {
          return false;
        }
        break;
      default:
        return;
    }
  }
  return temp.length === 0;
};

// console.log(validParenthesis("{{{}{}}{}}")); //
// console.log(validParenthesis("{{}{}}"));
console.log(validParenthesis("}{}{"));
// console.log(validParenthesis("{{{}{}}"));
// console.log(validParenthesis("{}}}}}}"));
