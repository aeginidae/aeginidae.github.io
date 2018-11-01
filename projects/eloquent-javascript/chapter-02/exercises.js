
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
  for (let i = 1; i <= size; i++) {
    console.log('#'.repeat(i));
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // for i from 1 to 100, logs to the console "Fizz" if i is multiple of 3,
  // "Buzz" if i is multiple of 5, "FizzBuzz" if both, else logs i
  for (let i = start; i <= end; i++) {
      if (!(i % 3) && !(i % 5)) { // !(x % y) evaluates to true if x divisible by y
          console.log("fizzbuzz");
      } else if (!(i % 5)) {
          console.log("buzz");
      } else if (!(i % 3)) {
          console.log("fizz");
      } else {
          console.log(i);
      }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  const result = [];
  for (let i = 0; i < size; i++) {
    if (!(i % 2)) {
      result.push('');
      for(let x = 0; x < size; x++) {
        if (x % 2) {
          result[i] += '#';
        }
        else {
          result[i] += ' ';
        }
      }
    } else {
      result.push('');
      for(let x = 0; x < size; x++) {
        if (x % 2) {
          result[i] += ' ';
        }
        else {
          result[i] += '#';
        }
      }
    }
  }
  console.log(result.join('\n') + '\n');
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
