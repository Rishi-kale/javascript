// ✅ Block Scope
// Any code inside { ... } creates a block scope. Applies to let and const.

{
    let a = 1;
    const b = 2;
  }
//   console.log(a); // ❌ Error
//   console.log(b); // ❌ Error
  
// ✅ Function Scope
// Variables declared with var are accessible throughout the function they’re in.

function example() {
    var msg = "Hi!";
    if (true) {
      var msg2 = "Inside if";
    }
    console.log(msg2); // ✅ Works because `var` is function-scoped
  }
  