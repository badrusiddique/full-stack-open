function demo(y) {
  const demo_str = function demo_str(z) {
    console.log(x, y, z)
  }
  let x = 10
  return demo_str
}

demo("hello")("world")  // 10 hello world


console.log("-------------------------------------------");
for(var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// 3 3 3

for(let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// 0 1 2

for(var i = 0; i < 3; i++) {
    const print = (j) => setTimeout(() => console.log(i), 1000);
    print(i);
}
// 0 1 2 -> same output with `var`

console.log("-------------------------------------------");
function incrementCounter() {
    var counter = 0;
    return function() {
        counter += 1;
        console.log(counter);
    }
}
const myCounter = incrementCounter();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3

console.log("-------------------------------------------");
// CONSTRUCTOR FUNCTION
function incrementCounter() {
    var counter = 0;
    this.increment = function() {
        counter += 1;
        console.log(counter);
    }
    
    this.decrement = function() {
        counter -= 1;
        console.log(counter);
    }
}
const myCounter = new incrementCounter();
myCounter.increment(); // 1
myCounter.increment(); // 2
myCounter.decrement();  // 1

console.log("-------------------------------------------");
function x() {
  var a = 10, z = 10;
  return function() {
    console.log(a)
  }
}

const x_fn = x();

x_fn(); // a's reference is still present cannot be GC collected
// z is not referenced in the inner function, can be GC collected
