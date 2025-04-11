// var
// Function-scoped
// Can be redeclared
// Can be hoisted (moved to the top of their function)

function testVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // ✅ 10 (because var is function-scoped)
  }
  testVar();
  