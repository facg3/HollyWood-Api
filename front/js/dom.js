var ul = document.createElement('ul');
const container = document.querySelector(".search-container");
ul.className = "u-list";
const inputBox = document.querySelector('.search-box');

function onInput() {
  var searchValue = inputBox.value;
  fetch('/search', searchValue, dispalyResult);
  ul.innerHTML = "";
}


function dispalyResult(array) {
  array.forEach(function(starName) {
    var li = document.createElement("li");
    li.innerText = starName;
    li.className = "list";
    li.addEventListener('click', function(){
      console.log(inputBox);
      inputBox.value = starName;
    })
    ul.appendChild(li);
  });
  container.appendChild(ul);
}
