// ✅ const
// Same block-scoping as let
// Must be initialized when declared
// Cannot be reassigned

const z = 30;
// z = 40; // ❌ TypeError: Assignment to constant variable

// ⚠️ BUT: const does not make objects or arrays immutable, just the variable binding.

const obj = { name: "John" };
obj.name = "Jane"; // ✅ This works

