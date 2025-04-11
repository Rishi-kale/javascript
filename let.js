// ✅ let
// Block-scoped (only accessible within { ... })

// Cannot be redeclared in the same scope

// Not hoisted like var

function testLet() {
    if (true) {
      let y = 20;
      console.log(y); // ✅ 20
    }
    // console.log(y); // ❌ ReferenceError: y is not defined
  }
  testLet();
  