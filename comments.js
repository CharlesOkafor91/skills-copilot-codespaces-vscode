// Create web server
// Create a web server that can listen to requests for /hello and respond with some HTML that says <h1>Hello World!</h1>
// Create a web server that can listen to requests for /hello?name=firstName and respond with some HTML that says <h1>Hello firstName!</h1>. For example, if a client requests /hello?name=John, the server should respond with <h1>Hello John!</h1>
// Create a web server that can listen to requests for /hello?name=firstName&lastname=lastName and respond with some HTML that says <h1>Hello firstName lastName!</h1>. For example, if a client requests /hello?name=John&lastname=Doe, the server should respond with <h1>Hello John Doe!</h1>

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const name = query.name;
  const lastName = query.lastname;
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (name && lastName) {
    res.write(`<h1>Hello ${name} ${lastName}!</h1>`);
  } else if (name) {
    res.write(`<h1>Hello ${name}!</h1>`);
  } else {
    res.write('<h1>Hello World!</h1>');
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});