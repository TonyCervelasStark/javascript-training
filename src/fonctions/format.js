function add(a, b) {                // more safe
    return a + b;
}
console.log('2+3 = ', add(2, 3));

var mult = function (a, b) {        // mult is a variable
    return a * b;
};
console.log('4*3 = ', mult(4,3));

var divide = (a,b) => a/b;          // fat arrow style (ES2015)
console.log('10/2 =', divide(10,2));