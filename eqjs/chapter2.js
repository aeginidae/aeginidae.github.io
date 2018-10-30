// EXERCISE ONE
// LOOPING A TRIANGLE

// simply put, logs this to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

const triArr = [];
for (let i = 1; i <= 7; i++) {
    triArr.push('#'.repeat(i));
}
console.log(triArr.join('\n'));

// EXERCISE TWO
// FIZZBUZZ

// for i from 1 to 100, logs to the console "Fizz" if i is multiple of 3,
// "Buzz" if i is multiple of 5, "FizzBuzz" if both, else logs i
for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) { // !(x % y) evaluates to true if x divisible by y
        console.log("FizzBuzz");
    } else if (!(i % 5)) {
        console.log("Buzz");
    } else if (!(i % 3)) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

// EXERCISE THREE
// CHESSBOARD

// logs a chessboard pattern to the console:
/* # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
*/
const size = 8;
for (let i = 0; i < size; i++) {
    if (i % 2) {
        console.log(" # # # #");
    } else {
        console.log("# # # # ");
    }
}