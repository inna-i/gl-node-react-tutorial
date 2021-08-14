const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const filePath = path.join(__dirname, 'myfile.txt');

const myReadableStream = fs.createReadStream(filePath, 'utf8');
const myWritableStream = fs.createWriteStream(path.join(__dirname, 'myfile.text.gz'));

myReadableStream.on('data', function(chunk) {
    console.log('chunk of data recieved:');
    console.log(chunk);
});

// pro version
myReadableStream
    .pipe(gzip)
    .pipe(myWritableStream)
    .on('finish', () => console.log('done compressing'));