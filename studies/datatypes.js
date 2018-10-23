/*
* ----DATA TYPES----
* In order for a computer to perform an operation on a value,
* it first needs to know what type of data it is dealing with.
* For instance, if one attempted to perform addition between a
* bool and undefined, it would throw an error because those data
* types can't be operated on in that way.
* 
* 1. PRIMITIVE DATA TYPES
* These are atomic and immutable data types, stored in eight bytes.
* When operated on, the value itself is not changed; rather, a new
* value is returned.
* 
* 2. COMPLEX DATA TYPES
* These data types can be of any size, as they are not stored in a single
* eight-byte variable. These data types contain other values or a series of
* operations to be performed on given values. They are mutable, unlike primitives.
*/

// PRIMITIVES //

// number //

let x = 2;
let y = 8.24;
console.log( x + y );

// unlike some other languages like Python, JavaScript does not distinguish
// between int and float data-types.

// string //

let str = "Hello World!";
console.log( str );
let str2 = " I hope you have a wonderful day!";
console.log( str + str2 );
let strNum = "3";
let poorPractice = function(s) {
    return [s == 3, s === 3];
};
console.log(poorPractice(strNum));

// IMPORTANT: non-strict comparisons will treat a string of a number and that
// number as equal. This can lead to poor programming. Try to use strict comparison.

// bool //
let isTrue = true;
console.log(isTrue === false);
let comparison = 3 > 4;
console.log( comparison && isTrue );

// These can only be true or false. This is the data type returned by comparison operators.

// FALSY DATA TYPES //

// these data types are treated as "false" by comparison operators or conditional statements

// NaN //

let number = NaN
if (number) {
    console.log("This is a number");
} else {
    console.log("This is not a number!");
}

// null //

let nil = null;
console.log(!!nil);

// null is a value denoting lack of a value. If a variable is null, then it has been
// initialized but had its value negated.

// undefined //

let i;
console.log(i);
i ? console.log("i is defined") : console.log("i is not defined");

// undefined also denotes a lack of value, except it also communicates that a variable
// has not even been initialized.

// ADDENDUM : other "falsy" values are 0, [], {}, "", and ''

// COMPLEX DATA TYPES //

/*
*  REFERENCE AND COPYING
* A complex value is too large to be stored in a variable, as a variable is only 8 bytes
* and complex values are of indefinite size. What is stored in a variable is a reference value
* that points the code to the location in memory where the complex value is stored.
* This presents some issues with copying complex data. When one copies an array, one copies
* the reference value. Therefore, if one changes the copy, one changes the original as well.
*/

// Object //

const obj = {
    nameFirst: "Alexa",
    nameLast: "Welch"
}

console.log(Object.values(obj), obj.nameLast, obj["nameFirst"]);

// an Object is a set of key-value pairs. The keys must be strings (quotes not required), and
// the values can be any data type, including other objects. Object keys can be accessed through
// bracket notation or dot notation.

// Array //

const arr = [1,2,3];
console.log(arr[1], arr.length);

// an Array is a type of Object that is ordered; the keys are indices starting from 0
// and counting up. 

// Function //

const func = function(a, b) {
    return a - b;
}

console.log(func(2,4));

// Functions are a data type representing blocks of code to be executed

// anyway, that was Wonderwall