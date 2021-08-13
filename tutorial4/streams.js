const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

var gzip = zlib.createGzip();
var myReadStream = fs.createReadStream(path.join(__dirname, 'myfile.txt'), 'utf8');
var myWriteStream = fs.createWriteStream(path.join(__dirname, 'myfile.txt.gz'));

myReadStream.on('data', function(chunk) { // check chunk of data
    console.log('new chunk received:  ');
    console.log(chunk);

    myWriteStream.write(chunk);
})

// pro version
myReadStream   // reads from myfile.txt
    .pipe(gzip)  // compresses
    .pipe(myWriteStream)  // writes to myfile.txt.gz
    .on('finish', function () {  // finished
        console.log('done compressing');
});