const fs = require('fs');
const path = require('path');

const homePageHandler = (request, response)=>{
  fs.readFile(path.join(__dirname, '..', 'front', 'index.html'), (error, file)=>{
    if (error) {
      console.log(error);
    } else{
      response.writeHead(200, "Content-Type: text/html" );
      response.end(file);
    }
  });
}

const frontHandler = (request, response) => {
  // Marwa And Yasmin
  const extention = request.url.split(".")[request.url.split(".").length-1];
  const fileType = {
    html : 'text/html',
    css : 'text/css',
    js :'application/javascript',
    ico : 'image/x-icon'
  };
  fs.readFile(path.join(__dirname, '..', request.url), (error,file)=>{
    if (error){
      response.writeHead(500, 'Content-Type:text/html');
      response.end("<h1>Internal Error</h1>");
    }else{
      response.writeHead(200, 'Content-Type: ' + fileType[extention]);
      response.end(file);
    }
  });
}


const searchHandler = (request, response) => {
  fs.readFile(path.join(__dirname, '..', '/search'), (error,file)=>{
    if (error){
      response.writeHead(500, 'Content-Type:text/html');
      response.end("<h1>Internal Error</h1>");
    } else {
    }
    });
}
module.exports = {
  frontHandler,
  searchHandler,
  homePageHandler
}
