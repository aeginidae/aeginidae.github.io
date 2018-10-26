// let's learn string theory //

// First, let's talk about what a string is.
// It's an immutable, iterable collection of characters.
// Like in an array, one can access individual locations in the string
// using bracket notation. Unlike in an array, one can not modify individual
// values in the string.

let str = "GUTEN TAAAAAAG";
console.log(str[2]);

// strings can be concatenated as well, using the "+" operator

str += " MEIN LIEBCHEN";
console.log(str);

// str[2] = "B" would throw an error because the string is immutable.
// Rather, one could remove that value and then insert a replacement.

delete str[2];
str = str.slice(0, 2) + "B" + str.slice(3);
console.log(str);

// this brings us to a new topic: STRING METHODS //

// String() is a constructor function that can also be called as a literal
// e.g. "string". As a built-in object, it comes with built-in methods.
// Get more information at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

str = str.split("B");
console.log(str);

// returns an array of strings split at the given argument (the argument is deleted from the string)

str = str.join("T");

// that was an array method, don't mind that for now

console.log(str.toLowerCase());
console.log("i want to be tall".toUpperCase());

// These return the input string with all of its characters either lower or uppercase

// again, go to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// there is a comprehensive list of methods there complete with use-cases and examples

// Python has much better string slicing notation and I wish JS did the same thing
