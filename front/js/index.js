function fetch(url, searchValue, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4){
      if (xhr.status == 200) {
        if(xhr.responseText !== "Empty"){
          callback(JSON.parse(xhr.responseText));
        }
      } else {
        alert("Error Occured!!, on: "+url+" with response: "+error);
      }
    }
  }
  xhr.open("POST", url, true);
  xhr.send(searchValue);
}
