function Dinosaurus(name){
    this.size = 12;
    this.name = name;
}
Dinosaurus.prototype.age = -65000000;
Dinosaurus.prototype.size = 20;

const denver = new Dinosaurus('Denver');

const petitPied = new Dinosaurus('Petit Pied');

console.log('denver size : ', denver.size);

//Denver object is built from a prototype
//But denver has no prototype :(
//console.log('denver prototype size : ', denver.prototype.size);
denver.size = 150;
console.log('new denver size : ', denver.size);