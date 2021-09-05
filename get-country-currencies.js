import fetch from "node-fetch";
import fs from "fs";

async function csvToArray(){
    
    try {
        const delimiter = ',', newLine= '\r\n';
        const str = await getFile
                        .then(res =>{
                            return res;
                        })
                        .catch(error =>{
                            console.log(error);
                        });

        const headers = str.slice(0, str.indexOf(newLine)).split(delimiter);  // Currency Code | Currency Name | Country
        const lines = str.slice(str.indexOf(newLine)+2).split(newLine);

        const array = lines.map(function (line) {
            const values = line.split(delimiter);
            const key = headers.reduce(function (object, header, index) {
              object[header] = values[index];
              return object;
            }, {});
            return key;
          });
        return array;
    } catch (error) {
        console.log(error);
    }
}

const getFile = new Promise((resolve, reject) => {
    try {
        let buf = new Buffer.alloc(5500);

        // Supported currencies are stored in a csv file. Opening csv file, reading and closing it properly
        fs.open('./country-currencies.csv', 'r', function(err, fd) {
            if (err) {
                return console.error(err);
            } 
        
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }

                if(bytes > 0){
                    const file = buf.slice(0, bytes).toString();
                    resolve(file);
                }
            });
        })
    } catch (error) {
        reject(error);
    }
});

// csvToArray()
//     .then(res =>{
//         console.log(res);
//     })
//     .catch(error =>{
//         console.log(error);
//     });


export {csvToArray};

