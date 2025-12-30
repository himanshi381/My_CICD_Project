console.log("Running quick test...");
let x = 10;
let y = 10;

if (x === y) {
    console.log("Test Passed!");
    process.exit(0);
} else {
    console.log("Test Failed!");
    process.exit(1);
}
function badFunction() {
  var a = 10;
  var a = 20;   // duplicate variable (code smell)
  if (true) {
    console.log("Always true"); // useless condition
  }
}
badFunction();
