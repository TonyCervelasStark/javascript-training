function add(a, b) {
    return a + b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

var minus = function (a, b) {
    return a - b;
};

console.log('a =', 2, 'b =', 6);
console.log('a*b =', multiply(2, 6));
console.log('a*b =', divide(2, 6));
console.log('a*b =', add(2, 6));
console.log('a*b =', minus(2, 6));

function operation(op, x, y) {
    return op(x,y);
}

console.log('add ', operation(add, 56, 59));
console.log('add ', operation(multiply, 56, 59));

var ops = [add, divide, multiply, minus];

var rand = ops[Math.floor(Math.random() * ops.length)];
console.log('add random ', rand ,operation(rand, 56,59));