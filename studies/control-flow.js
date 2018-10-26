// BRANCHING PATHS IN CODE //

// We've all seen flow charts before. These literally exist in JavaScript and any
// object-oriented language. In JS, we control the flow of code using conditional
// statements: if..else if..else

const pi = 3.14;
if (typeof(pi) === "number") {
    console.log("Yep, that's a number!");
}

if (typeof(pi) === "string") {
    console.log("That wasn't supposed to happen.");
}

// Here, the first block of code executed just fine.
// The second block of code, though?
// We run into the if statement, which checks if its given
// condition is true, and after we see that it is false, we simply
// skip the associated block entirely. JS steps right over it, executing nothing.

const numStr = "1";
const num = 1;

if (numStr === num) {
    console.log("These are strictly equal!");
} else if (numStr == num) {
    console.log("These are equivalent, but not strictly equal.");
} else {
    console.log("These are in no way equivalent.");
}

// In an if-else if-else statement, multiple conditions are sequentially checked.
// Once a single condition is met (from the top-down), its block of code is executed
// and the rest of the if-else if-else construct is skipped.
// If none of the conditions are met, then the "else" block is executed.

// IMPORTANT : Order your conditions carefully! Take this poorly-written FizzBuzz
// as an example of what not to do:

function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (!(i % 5)) console.log("Buzz");
        else if (!(i % 3)) console.log("Fizz");
        else if (!(i % 3) && !(i % 5)) console.log("FizzBuzz");
        else console.log(i);
    }
}

fizzBuzz();

// See if you can find the problem here.

// Because the first checks in the if structure check for divisibility by
// 5, then 3, any numbers that meet the "FizzBuzz" condition are going to be caught
// early by the first condition. The better way to write it would be:

function betterFizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (!(i % 3) && !(i % 5)) console.log("FizzBuzz");
        else if (!(i % 3)) console.log("Fizz");
        else if (!(i % 5)) console.log("Buzz");
        else console.log(i);
    }
}

betterFizzBuzz();

// There we go: the most specific condition that overlaps with the other two
// is checked first. This is an easy pitfall.

// One more note: an "if" statement checks for truthiness or falsiness!
// The "bang" operator ! is useful here.

if(0) {
    console.log("That wasn't supposed to happen");
} else if (!"") {
    console.log("Yes, that's an empty string.");
} else {
    console.log("Something went wrong here.");
}

if(!null) {
    console.log(!!null);
}

// Now you know how to conveniently save your computer execution time! Let's do
// flow charts together.