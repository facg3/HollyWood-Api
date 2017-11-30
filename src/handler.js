const fs = require('fs');
const path = require('path');
const queryString = require('querystring');

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
    ico : 'image/x-icon',
    jpg: 'image/jpeg',
    png: 'image/png'
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

const getResults = (data, input)=>{
  var resultsArray = [];
  data.forEach((item)=>{
    if(input.trim()!==""){
      var searchText = input.trim();
      if(item.toUpperCase().startsWith(searchText.toUpperCase())) resultsArray.push(item)
    }
  });
  return resultsArray;
}

const searchHandler = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'src', 'stars.json'), 'utf8', (error,file)=>{
    if (error){
      response.writeHead(500, 'Content-Type:text/html');
      response.end("<h1>Internal Error</h1>");
    } else {
      var allData = "";
      request.on('data', (data)=>{
        allData += data;
      });
      request.on('end', ()=>{
        if(!allData) response.end("Empty")
        else {
          var dataArray = JSON.parse(file);
          var results = getResults(dataArray, allData);
          response.end(JSON.stringify(results));
        }
      });
    }
  });
}


module.exports = {
  frontHandler,
  searchHandler,
  getResults,
  homePageHandler
}
