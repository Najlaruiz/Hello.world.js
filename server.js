// File: server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node !!!!</h1>\n');
});


const PORT = 3005; // Use a different port, for example, 3001

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});