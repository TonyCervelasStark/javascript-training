/**
 * Note that : we have a Uppercase
 * It's just a convention
 */

function Dinosaurus(name){
    this.size = 12;
    this.name = name;
}
Dinosaurus.prototype.age = -65000000;

const denver = new Dinosaurus('Denver');
// new gives access to a prototype

const petitPied = new Dinosaurus('Petit Pied');
petitPied.size = 3;

console.log('name : ', denver.name);
console.log('size : ', denver.size);
console.log('name : ', petitPied.name);
console.log('size :', petitPied.size);

console.log('denver age : ',denver.age);
console.log('denver age : ',petitPied.age);

function TRex(){
    this.name = 'Rex';
}
function Carnivore(){
}
Carnivore.prototype.eat = function (obj){
    console.log(this.name + ' eats ' + obj.name);
}


// TRex.prototype = Dinosaurus.prototype;
// TRex.prototype = Carnivore.prototype;

Object.assign(TRex.prototype, Dinosaurus.prototype);
Object.assign(TRex.prototype, Carnivore.prototype);

const rex = new TRex();

console.log('rex age : ', rex.age);
console.log('rex size : ', rex.size);
rex.eat(petitPied);