function Student(firstName, lastName, id, grades) { 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.id = id; 
    this.grades = grades; 
    
    this.fullName = function() {
    	return this.firstName + " " + this.lastName;
    };
    
    this.getAverage = function() {
      let total = grades.reduce((sum, num) => sum + num);
      let count = grades.length;
    	return total / count;
    };
 }
 
 var studentOne = new Student("Ali", "Oz", "S19589", [3, 3.5, 4, 5, 3, 4.5]); 
 var studentTwo = new Student("Nur", "Oz", "S19845", [4, 4.5, 4, 5, 3, 4.5]); 
 
 console.log(studentOne.fullName() + "; " + studentOne.getAverage());
 console.log(studentTwo.fullName() + "; " + studentTwo.getAverage()); 
 
