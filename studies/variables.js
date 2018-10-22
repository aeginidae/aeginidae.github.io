/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
console.log(myVariable);
myVariable = "someString";
console.log(myVariable);

// var, let, and const //

for (let i = 0; i < 3; i++) {
    console.log(i);
}
try {
    console.log(i);
}
catch (e) {
    console.log("i is not defined!");
}
    
/* 
 * With the release of ES6 in 2015, there came two categories of variables other than 'var' -- 'let' and 'const'.
 * Whereas var is hoisted to its enclosing scope, both let and const are hoisted to their enclosing block of code.
 * 
 * --HOISTING--
 * 1. For an overview -- declared variables are processed before the execution of code. 
 * This is referred to as 'hoisting'. Variables are hoisted to specific segments of code.
 * That is to say: when a var is declared, it only exists within its scope. Once outside of
 * its scope, it ceases to exist. Likewise with let and const, they only exist within their block.
 * 
 * 2. The keyword 'let' initializes a variable that behaves like var, except its hoisting is more limited.
 * The keyword 'const' declares a variable that is identical in hoisting to let, except it is read-only,
 * i.e. once it is declared, attempting to change it will throw an error.
*/

// let is limited to block //

for (let i = 0; i < 5; i++) {
    console.log(i);
}
try {
    for (i; i < 10; i++) {
        console.log(i);
    }
}
catch(e) {
    console.log("i ceases to exist once the first for loop closes!");
}

// const is read-only

const pi = 3.14;
try {
    pi++
}
catch (e) {
    console.log("a const cannot be changed once declared!");
}

// NOTE : a const must be given a value when it is initialized! //
try { 
    const e;
}
catch (e) {
    console.log("this throws an error!");
}