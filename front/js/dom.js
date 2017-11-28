function onInput(){

}
function dispalyResult(array){
    var array=["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9"];
    var ul = document.createElement('ul');
    ul.className = "u-list";

    const arrayConverted = array.forEach(function(i){
      var li = document.createElement("li");
      li.innerText = i;
      li.className = "list";
      ul.appendChild(li);
  });
     const container = document.querySelector(".search-container");
     container.appendChild(ul);

}
