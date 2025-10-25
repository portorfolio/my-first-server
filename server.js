// Your server code goes here. Host your server on localhost:3000
console.log('Node is running')

const http = require('http');
const fs = require('fs'); //file system module

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading file.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data)
            }
        })
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});