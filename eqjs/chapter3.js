// EXERCISE ONE

// MINIMUM

const min = (x, y) => x > y ? y : x;

// EXERCISE TWO

// RECURSION

function isEven(x) {
    // given a whole number, recursively determines evenness
    // returns true if even, else false
    x = Math.abs(x);
    if (x === 0) {
        return true;
    }
    else if (x === 1) {
        return false;
    }
    else {
        return isEven(x - 2);
    }
}

// function countBs(str) {
//     return str.match(/B{1}/g).length;
// }

function countChar(char) {
    let re = new RegExp(char, "g");
    return (str) => str.match(re).length;   // returns the length of the array
                                            // containing every instance of char
}

const countBs = countChar('B');