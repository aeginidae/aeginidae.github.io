/*
* WHAT IS AN OPERATOR
*  Simply speaking, an operator acts on data.
*  The data being acted on is called an 'operand'.
*  Examples of operators include "+", "/", "===", "++", etc.
*  Most operators require two operands, but others are unary or ternary.
*/

// ARITHMETIC OPERATORS //

console.log(1 + 3);
console.log(5 / 2);
console.log(8 % 2);
console.log(4 - 3);
console.log(5 * 6);

// These take two operands with an operator between them, and performs the given
// arithmetic operation, evaluating to the result

// ASSIGNMENT OPERATORS //

const pi = 3.14;
let x = 6;
let str = "Gecko World!";
console.log(pi, x, str);
    
// these operators take the operand on the right, which is an expression, and
// assigns it to the variable named on the left.

// COMPARISON OPERATORS //

console.log(1 === 6);
console.log(1 < 5);
console.log(5 > 2);
console.log('a' <= 'b');
console.log('1' == 1);
console.log(5 >= 2);
console.log(7 != 8);
console.log('1' !== 1);

// these operators compare two operands, evaluating to a bool.
// there is an important distinction between strict and non-strict comparison.
// the "===" or "!==" operator checks for type, whereas "==" and "!=" are type-insensitive.

// LOGICAL OPERATORS //

console.log((4 > 2) && (3>1));
console.log((1 == '1') || ('1' === 1));
console.log(!0);
console.log(!!0);

// the first two correspond to AND and OR, evaluating to a bool
// &&: both operands must evaluate to true
// ||: either operand must evaluate to true
//
// !: the "bang" operator
// negates the truthiness of its operand (takes one operand)
// !!: the "double bang" operator
// flips the truthiness of its operand twice, coercing a value to a bool

// STRING OPERATORS //

// comparison operators can be used on strings, but the operator '+' can also be used
// to concatenate multiple strings

console.log("Hello" + " " + "World" + "!");
str = "Good";
str += "bye!";
console.log(str);

// UNARY OPERATORS //
//  This is a subset of operators that only take a single operand!

let i = 2;
i++;
console.log(i);
console.log(++i);
console.log(!true);
console.log(--i);
i++;
console.log(i);

// Most of these are increment and decrement operators. The bang operator is also included.
// IMPORTANT : i++ and ++i are each read from left to right. If one logs i++ to the console,
// the console first prints i then increments it. On the contrary, if one logs ++i to the console,
// the console first increments i then prints it.

// TERNARY OPERATORS //

// These are shorthand for an if/else statement.
// IMPORTANT : it must be an if/else statement, not if/elif/else or simply if.

7 < 4 ? console.log("Math is broken!") : console.log("Math still works!");

// the preceding is syntactic sugar for

if (7 > 4) {
    console.log("Math is broken!");
} else {
    console.log("Math still works!");
}
