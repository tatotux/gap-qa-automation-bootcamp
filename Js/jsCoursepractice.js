/*
const numbers = [1, 2, 3, 4];
console.log(doesInclude(numbers, -1));

function doesInclude(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;

    return false;
}

const numbers = arrayFromRange(5, 20);
console.log(numbers);

function arrayFromRange(min, max) {
    let array = [];
    for (i = min; i <= max; i++)
        array.push(i);
    return array
}
//-------------------------------------------------------------
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number))
            console.log(number)

}
function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}
showPrimes(10);
//-------------------------------------------------------------
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern);

    }
}
showStars(15);

//-------------------------------------------------------------
const marks = [90, 90, 90];
console.log(calculateAverage(marks));
console.log(calculateGrade(marks));

function calculateGrade(marks) {

    const avg = calculateAverage(marks);

    if (avg < 60) return 'F';
    if (avg > 60 && avg < 70) return 'D';
    if (avg > 70 && avg < 80) return 'C';
    if (avg > 80 && avg < 90) return 'B';
    else return 'A';

}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;

}

//-------------------------------------------------------------
console.log(sum(15));

function sum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0))
            sum += i;
    }
    return sum;
}
//-------------------------------------------------------------
const movies = {
    title: 'a',
    releaseYear: 2018,
    rating: '4.5',
    director: 'b'
}
showProperties(movies);

function showProperties(object) {
    for (let prop in object)
        if (typeof object[prop] === 'string')
            console.log(prop, object[prop]);
}

//-------------------------------------------------------------
const array = [null, 1, 2, 3, 4];

function counrTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count += 1;
    return count;
}
console.log(counrTruthy(array))

//-------------------------------------------------------------
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? "EVEN" : "ODD";
        console.log(i, message);
    }
}
showNumbers(15);
//-------------------------------------------------------------
function checkSpeed(speed) {
    const limit = 70;
    const kmPoint = 5;
    if (speed > limit)
        const points = Math.floor((speed - limit) / kmPoint);

    return (points > 12) ? 'License suspended' : 'You are ok, Points:', points;

}
console.log(checkSpeed(70));

//-------------------------------------------------------------
function FizzBuzz(input) {

    if (typeof(input) !== 'number')
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if ((input % 3 === 0))
        return 'Fizz';
    if ((input % 5 === 0))
        return 'Buzz';
    return input;
}

console.log(FizzBuzz(14));

function isLandscape(width, heigth) {
    return (width > heigth);
}
console.log(isLandscape(600, 500))



*/