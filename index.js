// Problem 1

function getSumMultiples3_5(limit) {
    let sum = 0;
    if (limit < 0) throw new Error('Negative numbers are not allowed');
    for (let i = 1; i < limit; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }

    return sum;
}

console.log(getSumMultiples3_5(10));