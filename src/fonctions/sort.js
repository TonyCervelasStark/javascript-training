// ********* classer des nombres dans un tableau *********

var x = [0, 3, 5, 6, 10, 12, -12, 45, 34];
console.log('tableau de x :', x);

var sortFunction = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};

x.sort(sortFunction);
console.log('tableau de x :', x);


// ********* classer des objets *********
var users = require('../data').users;
// console.log('users', users);

function sortUsers(user1, user2) {
    if (user1.name < user2.name) return -1;
    if (user1.name > user2.name) return 1;
    return 0;

}

users.sort(sortUsers);
console.log('users', users.map(user => user.name));