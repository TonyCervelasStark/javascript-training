var  denver = {
  name: 'Denver',
    age:12
};

var petitPied ={
  name: 'Petit Pied',
    age:-65000000
};

function pure(a,b){
    //a.age = 15 ; NOT PURE because it changes a
    return a.age + b.age; //PURE : for some input, will always return a value
}

console.log('pure :', pure(denver, petitPied))

function unpure(){
    // "sonsole.log" or "screen()" will modify a stream
    // capture the external petitPied object
    // depens on external context and not only parameters
    console.log('kick '+petitPied.name);
}

unpure();