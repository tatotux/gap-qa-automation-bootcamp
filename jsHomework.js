function sumMultiples(num) {
    let sum = 0;
    let multiples = [];
    for (let i = 1; i < num; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum = sum + i;
            multiples.push(i);
            // console.log("Es multiplo, num: ", i, "suma: " + sum);
        }
    }
    console.log("El listado de los multiplos es: " + multiples, " y su suma es: " + sum);
}

//sumMultiples(10);

//-----------------------------------------------------------------------
function isNarcicistic(num) {

    var i = 0;
    var sum = 0;
    var splitDigits = num.toString().split('').map(Number);

    while (i < splitDigits.length) {
        exp = Math.pow(splitDigits[i], splitDigits.length)
            //console.log(exp);
        sum = sum + exp;
        //console.log(sum);
        i++;
    }
    return (sum == num)
}

//console.log('Is it a Narsicistic number?: ' + isNarcicistic(153));

//--------------------------------------------------------------------------

function maskify(data) {
    let newData = data.toString().split('');
    let i = 0;
    console.log(newData.length);
    while (i < (newData.length - 4)) {
        newData[i] = '#';
        //console.log(newData[i]);
        i++;
    }
    console.log('You data is :' + newData.join(''));
}

//maskify('Prueba de string mas largo');

//---------------------------------------------------------------
function isPanagram(words) {
    let alpha = 'abcdefghijklmnñopqrstuvwxyz';
    let splitwords = words.toLowerCase().split('');
    console.log(splitwords);
    splitwords.forEach(element => {
        for (element of alpha) {
            let counter = +1;
            console.log(counter);
        }
    });
}

isPanagram("The quick brown fox jumps over the lazy dog");