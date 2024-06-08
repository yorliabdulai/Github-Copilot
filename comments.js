// Create a web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const path = require('path');

const comments = [];
const server = http.createServer((req, res) => {
  // Get the path
  const pathObj = url.parse(req.url, true);
  const pathname = pathObj.pathname;
  if (pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('500 - Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (pathname === '/comment') {
    const comment = querystring.parse(pathObj.query).comment;
    comments.push(comment);
    res.end('success');
  } else if (pathname === '/getComments') {
    res.end(JSON.stringify(comments));
  } else {
    res.statusCode = 404;
    res.end('404 - Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});