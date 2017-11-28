function fetch(url, searchValue, callback){
  var xhr = new XMLHttpRequest();
  xhr.onreadychange = function () {
    if (xhr.readystate == 4){
      if (xhr.status == 200) {
        callback(null, JSON.parse(xhr.responseText));
      } else {
        alert('Error Occured!!, on: "+url+" with response: "+error);
      }
    }
  }
  xhr.open("POST", url, true);
  xhr.send(searchValue);
}