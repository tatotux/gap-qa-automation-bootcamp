import fetch from "node-fetch";
import fs from "fs";



 async function csvToArray(delimiter=','){
    
    try {
        // const str = getFile();

        const str = await getFile
                        .then(res =>{
                            return res;
                        })
                        .catch(error =>{
                            console.log(error);
                        });

        // var country = str.split("\r\n");
        // console.log(country[1]);          



        const headers = str.slice(0, str.indexOf('\r\n')).split(delimiter);
        const rows = str.slice(str.indexOf('\r\n')+1).split('\r\n');



        // Currency Code | Currency Name | Country
        const array = rows.map(function (row){
            const values = row.split(delimiter);
            const el = headers.reduce(function(object, heaeders, index){
                object[headers] = values[index];
                return object;
            }, {});
            return el;
        });
        console.log(array);
        return array;
    } catch (error) {
        console.log(error);
    }
    
}

// function getFile() {
//     try {
//         let buf = new Buffer.alloc(5500);
//         // Supported currencies are stored in a csv file
//         // Opening csv file, reading and closing or properly
//         fs.open('//Users/adminsv/Documents/QABootcamp/gap-qa-automation-bootcamp/currencies.csv', 'r+', function(err, fd) {
//             if (err) {
//                 return console.error(err);
//             }
            
//             fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//                 if (err){
//                     console.log(err);
//                 }

//                 if(bytes > 0){
//                     const file = buf.slice(0, bytes).toString();
//                     // console.log(buf.slice(0, bytes).toString());
//                     return file;
                    
//                 }
//             });
//         })
        
//     } catch (error) {
//         console.log(error);
//     }
// }
// // getFile();

const getFile = new Promise((resolve, reject) => {
    try {
        let buf = new Buffer.alloc(5500);

        // Supported currencies are stored in a csv file. Opening csv file, reading and closing it properly
        fs.open('//Users/adminsv/Documents/QABootcamp/gap-qa-automation-bootcamp/currencies.csv', 'r', function(err, fd) {
            if (err) {
                return console.error(err);
            } 
        
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }

                if(bytes > 0){
                    const file = buf.slice(0, bytes).toString();
                    // console.log(buf.slice(0, bytes).toString());
                    resolve(file);
                    
                }
            });
        })
        
    } catch (error) {
        console.log(error);
    }
});
 
//  Ths is working fine
// getFile
// .then(res =>{
//     console.log(' ====== CSV FILE RETURNED ======');
//     console.log(res);
// });

console.log(csvToArray());

