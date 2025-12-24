// What you wrote:
getName1()
var getName1 = () => console.log("hi")

// What JavaScript sees after hoisting:
var getName1;          // Declaration hoisted, value is undefined
getName1()             // TypeError: getName1 is not a function
getName1 = () => console.log("hi")  // Assignment stays here


console.log("--------------------------------");
getName2()  // Works! Logs "hello"
function getName2() { console.log("hello") }

// After hoisting:
function getName2() { console.log("hello") }  // Entire function hoisted
getName2()


console.log("--------------------------------");
console.log(x); // undefined
console.log(getName3); // [Function: getName3]
var x = 7;
function getName3() {
  console.log("hello world");
}

// After hoisting:
function getName3() {
  console.log("hello world");
}
var x;               // Declaration hoisted, value is undefined
console.log(x);     // undefined
console.log(getName3); // [Function: getName3]
x = 7;              // Assignment stays here


console.log("--------------------------------");
console.log(a);
const a = 10;

// After hoisting:
console.log(a); // ReferenceError: Cannot access 'a' before initialization
const a = 10;   // Declaration and assignment stays here