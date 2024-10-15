class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get name() {
    return this._fisrtName;
  }

  set name(pName) {
    if (typeof pName != "string") {
      throw new Error("Name must be strig");
    }
    this._fisrtName = pName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lName) {
    if (typeof lName != "string") {
      throw new Error("LastName must be strig");
    }
    this._lastName = lName;
  }

  get age() {
    return this._age;
  }

  set age(pAge) {
    if (typeof pAge != "number") {
      throw new Error("Age must be number");
    }
    this._age = pAge;
  }

  toString() {
    return `My name is ${this._firstName} ${this._lastName}, i am ${this._age} years old`;
  }

}

// methods
// getters forfields
// setters forfields
// passExam(programName, grade)
// isAllPassed()
// toString()

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee,program = []) {
    super(firstName, lastName, gender, age);
    this._year = year;
    this._fee = fee;
    this._program = program;
  }
  // Student should contain the data about its programs and exams.
  // passExam will update that data, so if student passed all the exams(grade is great or equal to
  // 50), its year should be increased by one.
  // It should have a method isAllPassed().
  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value != "number") {
      throw new Error("Year must be number");
    }
    this._year = value;
  }

  get fee() {
    return this._fee;
  }
  set fee(value) {
    if (typeof value != "number") {
      throw new Error("Year must be number");
    }
    this._fee = value;
  }

  get program() {
    return this._program;
  }

  set program(value) {
    if (!isArray(value)) {
      throw new Error("Programmust be array");
    }
    this._program = value;

  }
  passExam(proName, grade) {
    console.log("Looking for program:", proName);  // Log the program name you're searching for
    console.log("Available programs:", this._program);  // Log the entire program array
    
    let pName = this._program.find((item) => item.programName === proName);
    
    if (pName) {
        pName.grade = grade;  // Correctly update the grade
        console.log(`Updated grade for ${proName}:`, pName);  // Log the updated grade
    } else {
        throw new Error(`Program ${proName} not found`);
    }
    if (this.isAllPassed()) {
      this._year++; // Increment the year if all exams are passed
      console.log("All exams passed. Year increased!");
  }
}

  isAllPassed() {
    console.log("isAllPassed has been initiated");
    return this._program.every((item) => item.grade >= 50);
}

  toString() {
    return `${super.toString()} in year ${this._year}, with a fee of $${
      this._fee
    }.`;
  }
}

let student1 = new Student("John", "Doe", "male", 20, 1, 5000, [
  { programName: "math", grade: 60 },
  { programName: "english", grade: 30 },
  { programName: "literature", grade: 50 },
  { programName: "hardware", grade: 49 },
  { programName: "software", grade: 52 }
]);

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
console.log(student1.toString()); // "John Doe  , 20 years old. in year 1, with a fee of $5000."
//console.log(student1.passExam("dfxcgtrvhjup", 10)); // Pass math with grade 60
console.log(student1.passExam("english", 55)); // Pass english with grade 55
console.log(student1.isAllPassed()); // true (both programs have grades >= 50)
console.log(user1.toString()); // Year should increment if all exams are passed
