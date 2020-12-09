window.onload = function() //executes when the page finishes loading
{
  setTimeout(addText, 5000); //sets a timer which calls function func1 after 5,000 milliseconds = 5 secs.

};

function addText() {
  var h2 = document.createElement("h2");
  var text = document.createTextNode("Added 5 sec later");
  h2.appendChild(text);
  document.getElementsByTagName("BODY")[0].appendChild(h2);
}
