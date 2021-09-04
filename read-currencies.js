import fetch from "node-fetch";
import fs from "fs";



 async function csvToArray(delimiter=','){
    
    try {
        const str = await getFile();
        const headers = str.slice(0, str.indexOf('\n')).split(delimiter);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const array = rows.map(function (row){
            const values = row.split(delimiter);
            const el =headers.reduce(function(object, heaeder, index){
                object[header] = values[index];
                return object;
            }, {});
            return el;
        });
        return array;
    } catch (error) {
        console.log(error);
    }
    
}


async function getFile() {
    try {
        let buf = new Buffer.alloc(1024);
        // Supported currencies are stored in a csv file
        // Opening csv file, reading and closing or properly
        fs.open('/Users/adminsv/Documents/QABootcamp/gap-qa-automation-bootcamp/currecies.csv', 'r', function(err, fd) {
            if (err) {
                return console.error(err);
            }
            
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }

                if(bytes > 0){
                    const file = buf.slice(0, bytes).toString();
                    return file;
                    //console.log(buf.slice(0, bytes).toString());
                }
            });
        })
        
    } catch (error) {
        console.log(error);
    }
}


console.log(csvToArray());

