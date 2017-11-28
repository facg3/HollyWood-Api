var ul = document.createElement('ul');
ul.className = "u-list";

function onInput() {
  var inputBox = document.querySelector('.search-box');
  var searchValue = inputBox.value;
  fetch('/search', searchValue, dispalyResult);
  ul.innerHTML = "";
}


function dispalyResult(array) {
  array.forEach(function(i) {
    var li = document.createElement("li");
    li.innerText = i;
    li.className = "list";
    ul.appendChild(li);
  });
  const container = document.querySelector(".search-container");
  container.appendChild(ul);
}
