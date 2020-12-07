function convertTemp() {
  let option = document.getElementsByName('converter')[0].value;
  let value = document.getElementById("value").value;
  let result;
  switch (option) {
    case 'f2c':
      result = (5 / 9) * (value - 32);
      break;
    case 'c2f':
      result = (9 / 5) * value + 32;
      break;
  }
  document.getElementById("result").innerHTML = "Result: " + result;
}

window.onload = function() {
  document.getElementById("submit").onclick = convertTemp;
};
