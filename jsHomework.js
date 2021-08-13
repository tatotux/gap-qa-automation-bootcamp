//-------------------------Problem 1-------------------------------------
function sumMultiples(num) {
    let sum = 0,
        multiples = [];
    for (let i = 1; i < num; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum = sum + i;
            multiples.push(i);
        }
    }
    console.log("El listado de los multiplos es: " + multiples, " y su suma es: " + sum);
}

//-------------------------Problem 2-------------------------------------
function isNarcicistic(num) {
    var i = 0,
        sum = 0;
    const splitDigits = [...num.toString().split('')]

    while (i < splitDigits.length) {
        exp = Math.pow(splitDigits[i], splitDigits.length)
        sum = sum + exp;
        i++;
    }
    return (sum == num)
}

//-----------------------------Problem 3-----------------------------------

function maskify(data) {
    let newData = data.toString().split('');
    let i = 0;
    while (i < (newData.length - 4)) {
        newData[i] = '#';
        i++;
    }
    console.log('You data is :' + newData.join(''));
}
//----------------------------Problem 4-----------------------------------

function isPanagram(words) {

    let alpha = 'abcdefghijklmnñopqrstuvwxyz';
    let splitwords = words.toLowerCase();

    if (splitwords.length < alpha.length) {
        return false;
    } else {
        for (let i of alpha) {
            if (splitwords.indexOf(i) === -1) {
                return false;
            } else {
                return true;
            }
        }
    }
}


//---------------------------Problem 5-------------------------------
const countDuplicates = (text) => {
    let arr = text.toLowerCase().split('');
    const unique = [...new Set(arr)];
    let duplicates = arr.length - unique.length;
    console.log('There are ' + duplicates + ' duplicates');
}



sumMultiples(10);
console.log('Is it a Narsicistic number?: ' + isNarcicistic(153));
maskify('Nananananananananananananananana Batman!');
console.log('Is this a Panagram? ', isPanagram("The quick brown fox jumps over the lazy dog"));
countDuplicates('indivisibility');