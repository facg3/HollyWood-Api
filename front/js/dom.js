var ul = document.createElement('ul');
const container = document.querySelector(".search-container");
ul.className = "u-list";
const inputBox = document.querySelector('.search-box');

function onInput() {
  const ulSelector = document.querySelector(".u-list");
  var searchValue = inputBox.value;
  fetch('/search', searchValue, dispalyResult);
  if(ulSelector){
    ul.innerHTML = "";
    ul.style.border = "none";
  }
}


function dispalyResult(array) {
  console.log(array);
  array.forEach(function(starName) {
    var li = document.createElement("li");
    li.innerText = starName;
    li.className = "list";
    li.addEventListener('click', function(){
      inputBox.value = starName;
    })
    ul.appendChild(li);
  });
  container.appendChild(ul);
}
