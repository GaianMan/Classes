class Person{
    constructor(firstName,lastName,gender,age){

        this._firstName=firstName;
        this._lastName=lastName;
        this._gender=gender;
        this._age=age;
    }
    get name(){
        return this._fisrtName;
    }
    set name(pName){
        if (typeof pName !="string"){
            throw new Error("Name must be strig");
        }
        this._fisrtName=pName;
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(lName){
        if (typeof lName !="string"){
            throw new Error("LastName must be strig");
        }
        this._lastName=lName;
    }
    get age(){
        return this._age;
    }

    set age(pAge){
        if (typeof pAge !="number"){
            throw new Error("Age must be number");
        }
        this._age=pAge;
    }
    toString(){
        return `My name is ${this._firstName} ${this._lastName}, i am ${this._age} years old`;
    }
}
class Student{
    
}

let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.

// Student is inherited from Person. It should have
// fields
// year
// fee
// program(array of { programName, grade })
// methods
// getters forfields
// setters forfields
// passExam(programName, grade)
// isAllPassed()
// toString()

// Student should contain the data about its programs and exams.
// passExam will update that data, so if student passed all the exams(grade is great or equal to
// 50), its year should be increased by one.
// It should have a method isAllPassed().
// Example of program array:

// [
// { programName: "math", grade: 10 },
// { programName: "english", grade: undefined },
// ];