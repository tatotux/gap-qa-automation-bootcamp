/**
 * Write a function to convert a name into initials. This kata strictly takes two words
 * with one space in between them.
 * The output should be two capital letters with a dot separating them.
 * It should look like this:
 *
 * Sam Harris => S.H
 * Patrick Feeney => P.F
 */

function getInitials(name) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('.');
}

// console.log(getInitials('Marco Sanabria'));

/**
 * It's the academic year's end, fateful moment of your school report.
 * The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
 * Return the average of the given array rounded down to its nearest integer.
 * The array will never be empty.
 */

// [1,2,3,4,5]  => Avg = 3
function getAvg(grades) {
  if (!grades.length) throw new Error('not array');
  return grades.reduce((accum, current) => accum + current) / grades.length;
}

console.log(getAvg(5));
