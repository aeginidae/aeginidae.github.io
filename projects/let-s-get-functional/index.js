// #!/usr/bin/env node

'use strict';

const customers = require('./data/customers.json');
const _ = require('lodown-aeginidae');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

const maleCount = array => _.filter(array, ele => ele.gender === 'male').length;

const femaleCount = array => _.reduce(array, (prev, ele) => ele.gender === 'female' ? prev += 1 : prev, 0);

const oldestCustomer = array => _.reduce(array, (prev, ele) => ele.age > prev.age ? ele : prev).name;

const youngestCustomer = array => _.reduce(array, (prev, ele) => ele.age < prev.age ? ele : prev).name;

const averageBalance = array => {
    const balanceToNum = balance => Number(balance.replace(/[\$,]/g, ''));
    return _.reduce(array, (prev, ele) => 
        prev = (prev + balanceToNum(ele.balance)), 0) / array.length;
};

const firstLetterCount = (array, letter) => {
    return _.filter(array, ele => 
        ele.name.toLowerCase().startsWith(letter.toLowerCase())).length;
};

const friendFirstLetterCount = (array, customer, letter) => {
    const customerObject = _.filter(array, c => c.name === customer)[0];
    return _.filter(customerObject.friends, friend => 
        friend.name.toLowerCase().startsWith(letter.toLowerCase())).length;
};

const friendsCount = (array, name) => {
    return _.pluck(_.filter(array, customer => 
        _.some(customer.friends, friend => 
            friend.name === name)), "name");
};

const topThreeTags = array => {
    const result = {};
    _.each(array, ele =>    // going into each object in the array
        _.each(ele.tags, tag =>     // going into each array "tags" in those objects
            result.hasOwnProperty(tag) ? result[tag] += 1 : result[tag] = 1));  // sum up occurrences of each tag
            console.log(Object.keys(result).sort((a, b) => result[b] - result[a]), result)
    return _.first(Object.keys(result).sort((a, b) => result[b] - result[a]), 3); // sort in descending order, return first three
};

const genderCount = array => {
    const result = {};
    _.each(_.pluck(array, "gender"), gender =>
        result.hasOwnProperty(gender) ? result[gender] += 1 : result[gender] = 1);
    return result;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
