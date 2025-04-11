
// ✅ Function Declaration
// This is the classic way to define a function:

function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Alice")); // Hello, Alice!
  

//   ✅ Function Expression
// You store the function in a variable:

const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("Bob")); // Hello, Bob!

//   ⚡ 2. Arrow Functions

const greet = (name) => {
    return `Hello, ${name}!`
  };
  