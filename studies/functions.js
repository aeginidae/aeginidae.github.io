// FUNCTIONS //

// A function is essentially canned code.
// Functions are not necessarily executed on creation,
// but rather saved for later use.
// Functions are the true way to avoid writing redundant code!

function doStuff() {
    return 1 + 4;
}

console.log(doStuff());

// obviously this example is pretty useless. Let's get a bit more functional
// with an old one of mine that I also referenced in loops.js

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

console.log(isPrime(5), isPrime(18));
const primeList = [];
for (let i = 1; i < 50; i++) {
    if (isPrime(i)) primeList.push(i);
}
console.log(primeList);
for (let i = 1; i < 2000; i++) {
    if (isPrime(i)) console.log(i);
}

// We don't need to rewrite the code every time we want to use it!

// a function is hoisted like a var, except its body is also hoisted

console.log(funkyCase("whoooooooaaaaaaaa"));

function funkyCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        i % 2 ? result += str[i].toLowerCase() : result += str[i].toUpperCase();
    }
    return result;
}

// the function was called earlier in the code than the definition of the function
// this is because the entire body of the function was hoisted to the top of
// its scope!

// HIGHER ORDER FUNCTIONS //

// Support for lambda functions has been spreading throughout object-oriented languages
// for years now. JS supports arrow functions

let arrowFuncSum = (x, y) => x + y;
console.log(arrowFuncSum(3,5));

// The expression to the right of the assignment operator has three parts:
// 1. One or more parameters
//    If there are two or more parameters, they must be enclosed in () and
//    separated by commas
// 2. => indicates that the parameters to the left are being passed to the
//       expression to the right
// 3. A single expression. IMPORTANT : There must be a single expression, no more!
//    The result of this expression is what is returned

function letterToUpperGenerator(char) {
    return function(str) {
        if (str.includes(char)) {
            return str.split(char).join(char.toUpperCase());
        }
        else return str;
    };
}

const makeTUppercase = letterToUpperGenerator('t');
console.log(makeTUppercase("the quick brown fox something something etc"));

// above is a higher order function -- it generates a function according to
// given parameters! This helps us be supremely lazy.

const only4 = [1,3,4,6,4,2,6,4,7,2,4,7,3,9,6,4].filter(x => x === 4);
console.log(only4);

// Array.filter, Array.reduce, and Array.map are built-in higher order functions.
// they each operate on an array, executing a given function on each value and
// returning a result.

// CONSTRUCTOR FUNCTIONS //

class Employee {
    constructor(nameFirst, nameLast, age, wage) {
        this.nameFirst = nameFirst;
        this.nameLast = nameLast;
        this.age = age;
        this.wage = wage;
    }
    promotion(amount) {
        this.wage += amount;
    }
    fullName() {
        return `${this.nameFirst} ${this.nameLast}`;
    }
    gotMarried(changeName, newName = null) {
        if (changeName) {
            this.nameLast = newName;
        }
    }
}

class Cashier extends Employee {
    constructor(nameFirst, nameLast, age, wage) {
        super(nameFirst, nameLast, age, wage);
        this.task = "Handling Money";
        this.paycheck = this.wage * 80;
    }
    getOvertime(hours) {
        this.paycheck += this.wage * 1.5 * hours;
    }
}

const ibrahim = new Cashier("Ibrahim", "N'Diaye", 32, 15);
console.log(ibrahim.fullName(), ibrahim.wage, ibrahim.paycheck);
ibrahim.promotion(3);
ibrahim.getOvertime(5);
ibrahim.gotMarried(true, "Faye");
console.log(ibrahim.fullName(), ibrahim.paycheck);

// class syntax is syntactic sugar for prototype inheritance. A class
// declaration is, in fact, a function that defines a template for new
// objects.