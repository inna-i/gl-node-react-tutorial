const fs = require('fs');
const http = require('http');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  switch (req.url) {
    case '/json': {
        res.setHeader('Content-Type', 'text/json');
        res.end(JSON.stringify({ data: 'myData' }));
        break;
    }
    case '/text': {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, this is text');
        break;
    }
    case '/html': {
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
                <head><title>Title</title></head>
                <body>Hello from html trestrtf</body>
            </html>
        `);
        break;
    } 
    default: {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    }
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// extra code here
// autorefresh
// fs.watch(path.resolve(__dirname, 'index.js'), () => {
//     require('child_process').spawn(process.argv.shift(), process.argv, {
//         cwd: process.cwd(),
//         detached : true,
//         stdio: 'inherit'
//     });
//     process.exit();
// });