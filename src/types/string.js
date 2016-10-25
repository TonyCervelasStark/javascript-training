var string = "Hello world";

string += " !";
console.log('string :', string);

var index1 = string.indexOf('lo');
console.log('index of lo : ', index1);

var index2 = string.indexOf('jo');
console.log('index of lo : ', index2);

function contains(haystack, needle) {
    return haystack.indexOf(needle) >= 0;
}

var isTrue = contains('Jack', 'ack');
console.log('Est-ce que "ack" est contenu dans "Jack" ?', isTrue);
var isFalse = contains('Mac Donalds', 'ack');
console.log('Est-ce que "ack" est contenu dans "Mac Donalds" ?', isFalse);
var isAlsoTrue = contains('Jim', 'Jim');
console.log('Est-ce que "Jim" est contenu dans "Jim" ?', isAlsoTrue);

//Equivalent
console.log('Jack is back'.includes('ack'));        /*Exist since ES 2015*/

/*
 * Regular Expression (/.../)
 */

var hello = "Hello World !";
var found = hello.search(/orl/);
var alsoFound = hello.search(/world/i);
console.log('found :', found, 'also :', alsoFound);

// /i for case insensitive
var x = /(.)*(world)/i.test('Hello World !');
console.log('x :', x);

// it is conform
var strangelyTrue = /(.)*(world)/i.test('Hello World here');
console.log('strangelyTrue :', strangelyTrue);

// not conform : we MUST finish with "world"
var moreStrict = /(.)*(world)$/i.test('Hello World here');
console.log('moreStrict :', moreStrict);




//Substring
var string = 'My name is Bond'

var a = 3;
var b = 6;

//return the sub string between two positions a and b
var withSubstring = string.substring(a, b);
function verifySubstring(element){
    if(element.length == b-a){
        return true;
    }
    else
        return false;
}
console.log(withSubstring.length);
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

console.log(withSubstr.length);
console.log('verifySubst ? : ', verifySubstr(string, withSubstr));


// tolower vs toupper

var string = 'My name is Bond'

//to upper case
var toUpper = string.toUpperCase();
console.log('La phrase "',string, '" en majuscule, donne : "',toUpper,'".');

//to lower case
var toLower = string.toLowerCase();
console.log('La phrase "',string, '" en minuscule, donne : "',toLower,'".');