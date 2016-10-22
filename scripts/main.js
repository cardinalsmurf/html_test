var myTitle = document.querySelector('p');
myTitle.textContent = "Hello, Teenage America.";

var myButton = document.querySelector('button');
myButton.onclick = function() {
  document.getElementById("demo").innerHTML = "You clicked me!";
}
