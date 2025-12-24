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