class Student {

  constructor(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(name) {
    var words = name.toString().split(' ');
    this.firstName = words[0] || '';
    this.lastName = words[1] || '';
  }

  get average() {
    let total = this.grades.reduce((sum, num) => sum + num);
    let count = this.grades.length;
    return total / count;
  }
}

var studentOne = new Student("Ali", "Oz", "S19589", [3, 3.5, 4, 5, 3, 4.5]);
var studentTwo = new Student("Nur", "Oz", "S19845", [4, 4.5, 4, 5, 3, 4.5]);

console.log(studentOne.fullName + ": " + studentOne.average);
console.log(studentTwo.fullName + ": " + studentTwo.average);
studentOne.fullName = "Omer Ozbek";
console.log(studentOne.fullName + ": " + studentOne.average);
console.log(studentTwo.fullName + ": " + studentTwo.average);
