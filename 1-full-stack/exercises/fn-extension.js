const radius = [3, 1, 2, 4];

const calculate =  (params, logic) => {
    const output = [];
    for(let i = 0; i < params.length; i++) {
        output.push((logic(params[i])).toFixed(2));
    }
    return output;
}

console.log("area of circle is: ", calculate(radius, (r) => Math.PI * r * r));
console.log("diameter of circle is: ", calculate(radius, (r) => 2 * r));
console.log("circumference of circle is: ", calculate(radius, (r) => 2 * Math.PI * r));

Array.prototype.calculate = function (logic) { return calculate(this, logic); };

console.log("WITH extension function: area of circle is: ", radius.calculate((r) => Math.PI * r * r));
console.log("WITH extension function: diameter of circle is: ", radius.calculate((r) => 2 * r));
console.log("WITH extension function: circumference of circle is: ", radius.calculate((r) => 2 * Math.PI * r));