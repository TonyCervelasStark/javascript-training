var x = {};
console.log('x : ', x, typeof x);

var john = {
    name: 'John',
    address: "London",
    friend: {
        name: 'Jim',
        age: 12
    }

};

console.log(john.name, 'lives in ', john.address);
console.log(john.friend.name,'is',john.friend.age);


var funkyCop = {
    name : 'Robocop'
};

var enemy ={
  name : 'Dick'
};

funkyCop.foe = enemy;
console.log('funky :',funkyCop);
enemy.foe = funkyCop;
funkyCop.name = "Venere Robocop"
console.log('enemy :',enemy);

enemy.dead = true;
delete funkyCop.foe;
console.log('funky now :', funkyCop);
console.log('enemy now :', enemy);