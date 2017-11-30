const container = document.querySelector(".search-container");
const inputBox = document.querySelector('.search-box');

var list = document.createElement('datalist');
list.className = "u-list";
list.id = "result-list"

function onInput() {
  const listSelector = document.querySelector(".u-list");
  var searchValue = inputBox.value.trim();
  inputBox.value = searchValue;
  if (searchValue)
    fetch('/search', searchValue, displayResult);
  if(listSelector)
    list.innerHTML = "";
}


function displayResult(array) {
  // console.log(array.length);
  // if(array.length == 0) {
  //   var option = document.createElement("option");
  //   option.innerText = "Hmmm, still searching, found nothing!";
  //   option.className = "list";
  //   list.innerHTML= 'qqqq';
  // } 
  else {
    array.forEach(function(starName, index) {
      var option = document.createElement("option");
      option.innerText = starName;
      option.className = "list";
      list.appendChild(option);
    });
  }
  inputBox.appendChild(list);
}
