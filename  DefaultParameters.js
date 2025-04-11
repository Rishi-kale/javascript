// Sets a default value if none is passed.

function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
  }
  
  greet(); // Hello, Guest
  greet("Ali"); // Hello, Ali
  