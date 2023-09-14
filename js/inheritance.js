/* ======= Prototype Based Inheritance ========= */

// let PersonOnly = function (name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }
// //console.dir(PersonOnly);

// PersonOnly.prototype.dateOfBirth = function (currentYear) {
//     console.log(`${this.name} is born in ${currentYear - this.age}.`)
// }

// //console.log(PersonOnly.prototype);

// let zarif = new PersonOnly('Zarif Abdullah', 5, 'Student');
// //zarif.dateOfBirth(2023);

// let anotherObject = new PersonOnly('Another Person', 20, 'Jobless');

// //console.log(anotherObject);

// PersonOnly.prototype.address = 'Bangladesh';
// console.log(zarif.address);


/* ======= Constructor Inheritance ========= */

let Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
// let Teacher = function (name, age, job, subject) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.subject = subject;
// }

let Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject;
}
let robiTeacher = new Teacher('Robiul Hasan', 45, 'Teaching', 'BPEd');
console.log(`${robiTeacher.name} whose profession is ${robiTeacher.job} is ${robiTeacher.age} years old and is a ${robiTeacher.subject} in the school.`)
