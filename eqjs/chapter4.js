// EXERCISE ONE

// THE SUM OF A RANGE

// time to steal from Python

function range(start, end, step = 1) {
    // returns an array containing each number from
    // start to end, inclusive. 'step' specifies the
    // distance between each array entry, e.g. range(1, 3, 2)
    // would yield [1,3]. Negative step values are acceptable.
    const result = [];
    if (start < end) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}


// EXERCISE TWO

// REVERSING AN ARRAY

function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {     
            // Math.floor(arr.length / 2) because we only need
            // to iterate over half of the array rounded down
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
            // this is ES6 destructuring assignment for swapping
            // variable values in place, i.e. [a, b] = [b, a].
            // we're starting from the outermost pair of values
            // in the array, stepping inward as i increments.
    }
}

const valueArr = [1, 4, 6, 8, 9];
reverseArrayInPlace(valueArr);
console.log(valueArr);


// EXERCISE THREE

// A LIST

function arrayToList(arr) {
    if (arr.length === 1) {
        return {value: arr[0], rest: null};
    }
    else {
        return {value: arr[0], rest: arrayToList(arr.slice(1))};
    }
}

function listToArray(list) {
    if (list.rest === null) {
        return [list.value];
    }
    else {
        return [list.value].concat(listToArray(list.rest));
    }
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, number) {
    const arr = listToArray(list);
    return number < arr.length ? arr[number] : undefined;
}


// EXERCISE FOUR

// DEEP COMPARISON

function deepEqual(x, y) {
    if (typeof x == typeof y) {
        if (typeof x == "object" && !(x == null || y == null)) {
            return objectCompare(x, y);
        }
        else if (x == y) {
            return true;
        }
        else {
            return false;
        }
    } else {
        return false;
    }
}

function objectCompare(x, y) {
    const [xKeys, yKeys] = [Object.keys(x), Object.keys(y)];
        if (xKeys.join('') == yKeys.join('')) {
            for (let i = 0; i < xKeys.length; i++) {
                if (!deepEqual(x[xKeys[i]], y[yKeys[i]])) {
                    return false;
                }
            }
        return true;
    }
}

const obj1 = {1: {1: 2, 3: 5}, 3: [2,5]};
const obj2 = {1: {1: 2, 3: 5}, 3: 4};
deepEqual(obj1, obj2);