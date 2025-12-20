//console.log(this === window); // true in a browser environment
console.log(this === globalThis); // true in modern environments
console.log(this === global); // true in Node.js environment
console.log(this === module.exports); // false in Node.js environment

console.log("-------------------------------------------");
console.log("this in function call WITHOUT strict mode");
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   console.log(this); // Refers to the newly created object
}
const person = new Person("John", "Doe"); // 'this' refers to global object in non-strict mode
console.log(person); // undefined
console.log(global.firstName); // 'John' in Node.js
console.log(global.lastName); // 'Doe' in Node.js

console.log("this in function call WITH strict mode");
("use strict");
function PersonWithStrict(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   console.log(this); // Refers to the newly created object
}
const personS = new PersonWithStrict("Mary", "J"); // 'this' refers to global object in non-strict mode
console.log(personS); // undefined
console.log(global.firstName); // 'John' in Node.js
console.log(global.lastName); // 'Doe' in Node.js

console.log("-------------------------------------------");
console.log("(c)all => (c)omma");
console.log("(a)pply => (a)rray");

console.log("-------------------------------------------");
console.log("BIND");
const arto = {
  name: "jane doe",
  age: 35,
  greet: function () {
    console.log("my age is: " + this.age);
  },
};

// console.log(arto.greet())

// const g = arto.greet;
// console.log({ g} )
setTimeout(arto.greet, 1000);
setTimeout(arto.greet.bind(arto), 1000);
setTimeout(function () {
  arto.greet();
}, 1000);
setTimeout(() => {
  arto.greet();
}, 1000);

console.log("-------------------------------------------");
console.log("BIND with arrow functions");
const outerThis = this;

const greet = () => {
  console.log(this === outerThis);
};

function greetFn() {
  console.log(this === outerThis);
}

greet(); // true
greet.bind(null)(); // true
greet.call({}); // true
greet.apply({}); // true

greetFn(); // false
greetFn.bind(outerThis)(); // true

console.log("-------------------------------------------");
console.log("THIS with arrow functions");
const counter = {
  count: 0,
  increment: function (c) {
    console.log(c);
    console.log(this.count);
    setInterval(function () {
      console.log(++c);
    }, 1000);
  },
};

// counter.increment(counter.count)

const counter1 = {
  count: 0,
  increment: function (c) {
    console.log(c);
    console.log(this.count);
    setInterval(() => {
      console.log(++c);
    }, 1000);
  },
};

// counter1.increment(counter1.count)

// 'this' here is global/undefined
const counter2 = {
  count: 0,
  increment: () => {
    // 'this' is still global/undefined, NOT counter2
    console.log(this.count);
    setInterval(() => {
      // arrow function here is fine - inherits 'this' from increment
      console.log(++this.count);
    }, 1000);
  },
};
counter2.increment();

console.log("-------------------------------------------");
console.log("IMPROTANT: Arrow functions use this from the surrounding lexical scope where they were defined, not where they were called.")

// IMPORTANT
// It’s important to note that the curly braces {} of the movie object do not create scope; only functions do.

const printCharacter = () => {
  console.log(this);
  return this.character + " is a main character in this show";
};

// const printCharacter = function () {
//   console.log(this)
//   return this.character + ' is a main character in this show';
// };

const series = {
  title: "House of Cards",
  character: "Frank Underwood",
  printTitle() {
    return `The name of the series is ${this.title}`;
  },
  printCharacter: printCharacter,
  // even this wont work bcz arrow function with THIS is not in lexical scope of series object
  //   printCharacter: () => {
  //     console.log(this);
  //     return this.character + " is a main character in this show";
  //   },

  // OR define inside printDetails method
//   printDetails() {
//     const printCharacter = () => {
//       return this.character + " is a main character in this show";
//     };

//     return `${this.printTitle()} and ${printCharacter()}`;
//   },

  printDetails() {
    console.log(this); // logs the series object
    return `${this.printTitle()} and ${this.printCharacter()}`;
  },
};

console.log(series.printDetails());

const movie = {
  title: "The Gray Man",
  printTitle: () => {
    console.log(`The name of the movie is ${this.title}`);
  },
};

movie.printTitle(); // The name of the movie is undefined



const bojack = {
  character: 'BoJack',
  sayHi: function () {
    console.log(this)
    setTimeout(() => {
    // LEXICAL SCOPE - Arrow function inherits 'this' from sayHi method
      console.log(`Hi, I'm ${this.character}!`);
    }, 1000);
  },
};

bojack.sayHi(); 


const todd = {
  character: 'Todd',
  sayHi: function () {
    setTimeout(function () {
    // REGULAR FUNCTION - 'this' refers to global object or undefined in strict mode
      console.log(`Hi, I'm ${this.character}!`);
    }, 1000);
  },
};

todd.sayHi(); // Hi, I'm undefined!