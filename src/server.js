const http = require('http');
const router = require('./router.js');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server = http.createServer(router.router);
server.listen(port, (error) =>{
  console.log('Server running on port: ' + port);
});


module.exports = server;
