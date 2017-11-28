const fetch () => {
  var xhr = new XMLHttpRequest();
  var url = "";
  xhr.onreadychange = function () {
    if (xhr.readystate == 4 && xhr.status == 200) {
      var    = JSON.parse(xhr.responseText);
      var    = document.queryselector('.');
      // var link =


    }
  };
  xhr.open("POST", url, true);
  xhr.send();
})();
