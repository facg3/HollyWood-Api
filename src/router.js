const handlers = require('./handler.js');


const router = (request, response) => {
  const endpoint = request.url;
  if (request.url === "/") {
    handlers.homePageHandler(request, response);
  } else if (request.url.startsWith("/front")) {
    handlers.frontHandler(request, response);
  } else if (true) {
    // Sum3a and Sultan
  } else {

  }
}

module.exports = router;
