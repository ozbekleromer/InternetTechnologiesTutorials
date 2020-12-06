function Student(firstName, lastName, id, grades) {

  const prototype = {
    firstName: firstName,
    lastName: lastName,
    id: id,
    grades: grades,

    fullName: function() {
      return this.firstName + " " + this.lastName;
    },

    getAverage: function() {
      let total = grades.reduce((sum, num) => sum + num);
      let count = grades.length;
      return total / count;
    }
  };

  let student = Object.create(prototype);
  student.firstName = firstName;
  student.lastName = lastName;
  student.id = id;
  return student
}

var studentOne = new Student("Ali", "Oz", "S19589", [3, 3.5, 4, 5, 3, 4.5]);
var studentTwo = new Student("Nur", "Oz", "S19845", [4, 4.5, 4, 5, 3, 4.5]);

console.log(studentOne.fullName() + "; " + studentOne.getAverage());
console.log(studentTwo.fullName() + "; " + studentTwo.getAverage());
