// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const flatten = arr => arr.reduce((x, y) => x.concat(y));

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
    // given a value value, a function test, a function update, and a function body,
    // tests whether the given value passes test, and if true, executes body with value as arg and
    // recursively calls loop on value passed through update.
    if (test(value)) {
        body(value);
        return loop(update(value), test, update, body);
    }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
    // imitates the Array.prototype.every() method
    for (const val of array) {
        if (!test(val)) {
            return false;
        }
    }
    return true;
}

function everyWithSome(array, test) {
    // if there is an element in array such that test
    // returns false, then return false, else true
    return array.some(x => !test(x)) ? false : true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function characterScriptPrime(char) {
  	const code = char.codePointAt(0);
    for (const script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from && code <= to)) {  
            return script;  // script.ranges is an array of arrays                                            
        }                   // representing multiple ranges of char codes
    }
    return null;
}

function countByPrime(iter, func) {
    // given an iterable and a function
    // that coerces the values in the iterable
    // to any value, generates an array of objects
    // each containing the name of the new value
    // and the amount of values coerced to it
    const counts = []; // we'll store values in here
    for (const i of iter) {
        let name = func(i);
        let known = counts.findIndex(c => c.name === name); // gives us the index of the object in counts
        if (known === -1) {                                 // that shares its name property with our new let, name
            counts.push({name: name, count: 1});       // findIndex returning -1 indicates the object does not yet exist
        }
        else {
            counts[known].count++;
        }                                                   
    }
    return counts;
}

function dominantDirection(text) {
    // takes a string of text, and using the provided
    // SCRIPTS array, determines whether the predominant writing direction
    // is left-to-right (ltr), right-to-left (rtl), or top-to-bottom (ttb)
    const scripts = countByPrime(text, characterScriptPrime).filter(({name}) => name !== null);
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name.direction;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
