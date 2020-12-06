let student = {
  firstName: "Ali",
  lastName: "Oz",
  id: "S19583",
  grades: [3, 3.5, 4, 5, 3, 4.5],

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(name) {
    var words = name.toString().split(' ');
    this.firstName = words[0] || '';
    this.lastName = words[1] || '';
  },

  get average() {
    let total = this.grades.reduce((sum, num) => sum + num);
    let count = this.grades.length;
    return total / count;
  }
}

console.log(student.fullName + "; " + student.average);
student.fullName = "Omer Ozbek";
console.log(student.fullName + "; " + student.average);
