// **Understanding var, let, and const in JavaScript**

var a = 10  // Global Object (window in browser)
let b = 20  // Script scope (separate memory)
const c = 30 // Script scope (separate memory)

// In browser:
console.log(window.a)  // 10 - var attaches to window
console.log(window.b)  // undefined - let doesn't
console.log(window.c)  // undefined - const doesn't

// **How JavaScript engine sees it:**
// ```
// Global Execution Context
// │
// ├── Global Object (window)
// │   └── a: 10              ← var lives here
// │
// └── Declarative Environment Record (Script scope)
//     ├── b: 20              ← let lives here
//     └── c: 30              ← const lives here
// ```

// ---


console.log("-------------------------------------------");
// The time between entering the scope and the actual declaration line is called the TDZ.
// During this period, let/const variables exist but cannot be accessed.

// Why was it designed this way?
// var behavior was a JavaScript design flaw - accessing variables before declaration leads to bugs.
// let and const (ES6) were introduced to fix this by making such access an error rather than silently returning undefined.
{
  // TDZ for 'x' starts here
  console.log(x)  // ReferenceError - we're in the TDZ
  let x = 5       // TDZ ends here
}


console.log("-------------------------------------------");
// var - hoisted but undefined
getName1()  // TypeError: getName1 is not a function
var getName1 = () => console.log("var arrow")

// let - TDZ error
getName2()  // ReferenceError: Cannot access 'getName2' before initialization
let getName2 = () => console.log("let arrow")

// const - TDZ error
getName3()  // ReferenceError: Cannot access 'getName3' before initialization
const getName3 = () => console.log("const arrow")

// Regular function - fully hoisted
getName4()  // Works! "function declaration"
function getName4() { console.log("function declaration") }

console.log("-------------------------------------------");
var fnVar = () => "var"
let fnLet = () => "let"
const fnConst = () => "const"
function fnDeclaration() { return "declaration" }

// **In Chrome DevTools:**
// ```
// Global Object (window)
// ├── fnVar: () => "var"           ← var
// └── fnDeclaration: ƒ             ← function declaration

// Script Scope
// ├── fnLet: () => "let"           ← let
// └── fnConst: () => "const"       ← const



console.log("-------------------------------------------");
// var - redeclaration allowed ✅
var x = 10
var x = 100
console.log(x)  // 100

// let - redeclaration not allowed ❌
let y = 10
let y = 100  // SyntaxError: Identifier 'y' has already been declared

// const - redeclaration not allowed ❌
const z = 10
const z = 100  // SyntaxError: Identifier 'z' has already been declared


console.log("-------------------------------------------");
// This was old JavaScript behavior (pre-ES6) - it was considered a design flaw because it leads to accidental bugs:
var name = "Bhargav"

// 500 lines later, you forget 'name' exists...

var name = "John"  // Silently overwrites, no warning!

console.log("-------------------------------------------");
// let - reassignment allowed ✅
let a = 10
a = 100  // Works fine

// const - reassignment not allowed ❌
const b = 10
b = 100  // TypeError: Assignment to constant variable

// const with objects - mutation allowed ✅
const obj = { name: "Bhargav" }
obj.name = "John"  // Works! (mutation, not reassignment)
obj = {}  // TypeError (reassignment)