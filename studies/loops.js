// bröther, may I have some lööps

/* LOOPS
 * A loop is a block of code that executes a given number of times.
 * A loop will continue to execute the same code until a condition is met.
 * IMPORTANT: if no closing condition / an impossible condition, the loop will go on
 * infinitely. In powershell or most IDEs, ctrl-C will force-interrupt a program's
 * execution. If uninterrupted, the infinite loop will crash your IDE and hog system
 * resources in the meantime.
*/

// WHILE //

let i = 0;
while (i < 8) {
    console.log(i);
    i++;
}

// While loops require their condition initialized outside of the loop. 
// These can be good for code that is to be repeated an unknown number of times.

i = 31;
while(!(i % 29)) {
    i++;
}
console.log(i);

// obviously that's a simple case; however, let's take this example using a function
// of mine:

function isPrime( n ) {
// 	given an integer n,
// 	returns true if n is prime,
// 	else returns false 
    if ( n === 0 ) return false;
    n = Math.abs(n);
	if ( n === 2 || n === 3 ) return true;
	for ( let i = 2; i <= Math.ceil(Math.sqrt(n)); i++ ) {
		if ( !(n % i) ) return false;
	}
	return true;
}

i = 100840;
while(!isPrime(i)) {
    i++;
}
console.log(i);

// this serves to find the first prime number at or above 100840,
// in which case we don't know how many times the code will run

// DO...WHILE //

i = 0;
do {
    i++;
}
while(i < 5);
console.log(i);

// the 'do' part always executes at least one time, because the condition is checked
// after executing the block of code. There are few use-cases for this.

// FOR //

for (let x = 0; x < 5; x++) {
    console.log(x);
}

// These let us execute a block of code a known amount of times.
// The conditional variable is initialized in the declaration of the loop;
// as such, there is a lower risk of infinite loops.

// for(let i = 0; i < 5; i--) {
//    doStuff(i);
// }

// Above is an infinite loop. Check to make sure that your closing condition will
// eventually be met!

// FOR...IN //

const obj = {
    id: 1,
    age: 4,
    cuteness: true
}

for (const key in obj) {
    console.log(obj[key]);
}

// This loops through all of the keys of an object represented as strings.
// Because the keys are strings, dot notation will not work because it will be
// read as e.g. obj."age"
// Don't use this with arrays! In this example, if obj were an array, key would be
// "0", "1", "2", etc

// FOR...OF //

const arr = [1,2,3,4,"blue"];
for (const item of arr) {
    console.log(item);
}

// This loops through the values in an array.
