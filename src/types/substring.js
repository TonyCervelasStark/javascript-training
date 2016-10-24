//Substring
var string = 'My name is Bond'

var a = 3;
var b = 6;
console.log('a =',a,'et b =',b);

//return the sub string between two positions a and b
var withSubstring = string.substring(a, b);
function verifySubstring(element){
    if(element.length == b-a){
        return true;
    }
    else
        return false;
}
console.log('La fonction Substring renvoit "',withSubstring,'" qui est de taille', withSubstring.length);
console.log(withSubstring,'verifySubstring ? : ', verifySubstring(withSubstring));


// return the sub string of a length b from the position a
var withSubstr = string.substr(a, b);
function verifySubstr(string, element){
    if(element.length == b && string.indexOf(element) == a){
        return true;
    }
    else
        return false;
}

console.log('La fonction Substr renvoit "',withSubstr,'" qui est de taille',withSubstr.length);
console.log('verifySubst ? : ', verifySubstr(string, withSubstr));