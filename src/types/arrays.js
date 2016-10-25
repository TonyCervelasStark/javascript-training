var x = [0, 3, 5, 6, 10, 12, -12, 45, 34];

// console.log('first :', x[0]);

// console.log('third :', x[2]);
x[2] = -42; // modification du 3eme élément
// console.log('third :', x[2]);

// déviation (ne pas faire)
x[-2] = "what ????";
// console.log('found :', x[-2]);

// console.log('all table', x);
x[99] = 140;
// console.log('big table now :', x);


/* Let's start over and serious stuff */
x = [0, 3, 5, 6, 10, 12, -12, 45, 34];


// *********** Sorted Array ***********
x.sort();
console.log('x sorted : ', x);

x.sort(function (a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    return 0;

});
console.log('x correctly sorted : ', x);

// Elvis operator
var sortFunction = (a, b) => a < b ? -1 : 1;
x.sort(sortFunction);
console.log('ES 2015 sorted', x);


// *********** Filtered Array ***********
var filtered = x.filter(function (number) {
    return number >= 0;
});
console.log('filtered x : ', filtered);

// Fat Arrow
var filteredFunction = (number) => number >= 0;
filtered = x.filter(filteredFunction);
console.log('filteredFunction : ', filtered);

// Equivalent direct
direct = x.filter(number => number >= 0);

// *********** Ajout/Supression d'éléments dans le tableau ***********

x = [0, 3, 5, 6, 10, 12, -12, 45, 34];
console.log('tableau de x : ', x);

// Remove last element
var lastElement = x.pop();
console.log('tableau de x : ', x);

// Add last element
x.push(50);
console.log('tableau de x : ', x);

// Remove first element
var firstElement = x.shift();
console.log('tableau de x : ', x);

// Add first element
x.unshift(10);
console.log('tableau de x : ', x);