const handlers = require('./handler.js');


const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handlers.homePageHandler(request, response);
  } else if (request.url.startsWith("/front")) {
    handlers.frontHandler(request, response);
  } else if (endpoint === '/search') {
    handlers.searchHandler(request, response);
  } else {
    response.writeHead(404,"Content-Type: text/html");
    response.end("<h1>No Files Found</h1>");
  }
}

module.exports = router;
