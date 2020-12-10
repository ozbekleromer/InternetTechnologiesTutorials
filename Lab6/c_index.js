function checkForm() {
  let age, email;

  age = document.getElementById("age").value;
  email = document.getElementById("email").value;
  const regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  if (isNaN(age) || age < 1 || age > 99) {
    alert("Age is not valid");
    return false;
  } else if (!regMail.test(String(email).toLowerCase())) {
    alert("Email is not valid");
    return false;
  } else {
    alert("Input is valid " + document.getElementById("name").value + " " + document.getElementById("surname").value + ".");
    return true;
  }
}
