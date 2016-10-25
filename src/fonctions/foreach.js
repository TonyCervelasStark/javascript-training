var users = require('../data').users;

users.forEach(function (user) {
    console.log('user name : ', user.name);
});

console.log('######');
// no result sent by clog()
users.forEach(user => console.log('user name : ', user.name));


//**************  forEach - display admin users **************
var admins = [];
var adminsFat = [];

// function style
users.forEach( function (user){
    if(user.admin === true){
        admins.push(user.name);
    }
});
console.log('result : ',admins);

//fat arrow style (not very pertinent)
users.forEach( (user) => user.admin ? adminsFat.push(user.name) : '');
console.log('resultFat : ',adminsFat);