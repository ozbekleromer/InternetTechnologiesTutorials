let person = {
  firstName: "Ali",
  lastName: "Oz",
  birthyear: 1978,
  gender: "male",

  fullName: function() {
    return this.firstName + " " + this.lastName;
  },

  getAge: function() {
    return new Date().getFullYear() - this.birthyear;
  }
}


function printObject(object) {
  for (let variable in object) {
    console.log("Variable name: " + variable + "\n" +
      "Variable value: " + object[variable] + "\n" +
      "Variable type: " + typeof(object[variable]) + "\n" +
      "-----------" + "\n");
  }
}

printObject(person);
